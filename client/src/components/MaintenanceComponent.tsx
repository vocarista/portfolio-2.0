// MaintenanceComponent.js
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2em;
  text-align: center;
  max-width: 600px;
`;

// Component
const MaintenanceComponent = () => {
  return (
    <Container>
      <Title>Site Under Maintenance</Title>
      <Description>
        Apologies for the inconvenience. This site is currently undergoing maintenance.
        Please check back later.
      </Description>
    </Container>
  );
};

export default MaintenanceComponent;