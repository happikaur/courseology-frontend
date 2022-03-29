import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { BrowserRouter } from "react-router-dom";

const MockNavBar = () => {
    return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
    )
  }

describe("Search Box", () => {
  it('should render navbar', async () => {
    //Arrange
    render(<MockNavBar />)

    //Act
       const navlinks = screen.getByTestId("nav-menu") 

    //Assert
        expect(navlinks).toBeInTheDocument();

  });

  it('should render nav links', async () => {
    //Arrange
    render(<MockNavBar />)

    //Act
       const navLinkHome = screen.queryByText("_courseology")
       const navLinkAdd = screen.queryByText("Add Course") 

    //Assert
        expect(navLinkHome).toBeInTheDocument();
        expect(navLinkAdd).toBeInTheDocument();
      
  });  
});