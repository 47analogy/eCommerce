import styled from 'styled-components';
import { Page, Layout } from '@shopify/polaris';

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
`;

const GridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text - align: center;
`;

const CupCakes = () => (
  <Page>
    <Layout>
      <GridContainer>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
        <GridItem>7</GridItem>
        <GridItem>8</GridItem>
        <GridItem>9</GridItem>
      </GridContainer>
    </Layout>
  </Page>
);

export default CupCakes;
