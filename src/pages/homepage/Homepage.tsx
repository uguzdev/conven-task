import React, { FC, useEffect, useState } from "react";
import FormSelect from "../../components/form/form-select/FormSelect";
import ListingHeader from "../../components/listing-header/ListingHeader";
import ListingMap from "../../components/listing-map/ListingMap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import {
  ListingSummary,
  ListingWrapper,
  LoaderWrapper,
  MapWrapper,
  OrderWrapper,
  PageTitle,
  PropertyList,
  SummaryText,
  Wrapper,
} from "./HomePageStyled";
import { COLORS } from "../../commons/constants/Constant";
import { getPropertiesApi } from "../../api/properties/PropertiesApi";
import { useDispatch, useSelector } from "react-redux";
import { setProperties } from "../../store/actions/PropertiesAction";
import { RootState } from "../../store";
import { PropertyI } from "../../interfaces/property";
import Property from "../../components/property/Property";

const Homepage: FC = () => {
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getPropertiesApi().then(({ properties }) => {
      dispatch(setProperties(properties));
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    });
  }, []);

  const properties = useSelector(
    (res: RootState) => res?.properties?.properties
  );

  return (
    <Wrapper>
      <ListingWrapper>
        <PageTitle>Listing View</PageTitle>

        {loader ? (
          <LoaderWrapper>
            <Loader
              type="Bars"
              color={COLORS.mainGreen}
              height={80}
              width={80}
            />
          </LoaderWrapper>
        ) : (
          <>
            <ListingHeader
              breadcrumbs={[
                {
                  name: "Inicio",
                  url: "/selam",
                },
                {
                  name: "Sao Paulo",
                  url: "/selam",
                },
                {
                  name: "Sao Paulo, SP",
                  url: "/selam",
                },
              ]}
            />

            <ListingSummary>
              <SummaryText>
                8.210 imoveis encondratos nessa regialo e arredores
              </SummaryText>
              <OrderWrapper>
                <FormSelect options={[{ name: "Mais Relevantes", value: 3 }]} />
              </OrderWrapper>
            </ListingSummary>
            <PropertyList>
              {properties.map((item: PropertyI) => (
                <Property
                  title={item.title}
                  photos={item.photos}
                  square={23}
                  bed={3}
                  type="casa"
                  location="cambuci, Sao Paulo"
                  rentPrice="1.000"
                  totalPrice="1.037"
                />
              ))}
            </PropertyList>
          </>
        )}
      </ListingWrapper>
      <MapWrapper>
        <ListingMap />
      </MapWrapper>
    </Wrapper>
  );
};

export default Homepage;
