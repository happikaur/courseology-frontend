import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "../SearchBox";
import { BrowserRouter } from "react-router-dom";

const mockedSetSearchBox = jest.fn()

const MockSearchBox = () => {
    return (
    <BrowserRouter>
      <SearchBox/>
    </BrowserRouter>
    )
  }



describe("Search Box", () => {
  it('should render search box', async () => {
    //Arrange
    render(<MockSearchBox  searchTerm={[]} handleInput={MockSearchBox}/>)

    //Act
       const searchbox = screen.getByTestId("search-box") 

    //Assert
        expect(searchbox).toBeInTheDocument();

  });

  it('should render input element', async () => {
    //Arrange
    render(<MockSearchBox  searchTerm={[]} handleInput={MockSearchBox}/>)

    //Act
       const inputElement = screen.getByPlaceholderText(/Enter a course title/i) 

    //Assert
        expect(inputElement).toBeInTheDocument();
      
  });

  it('should be able to type into the input box', async () => {
    //Arrange
        render(<MockSearchBox  searchTerm={[]} handleInput={MockSearchBox}/>)

    //Act
    const inputElement = screen.getByPlaceholderText(/Enter a course title/i)
    userEvent.click(inputElement)
    userEvent.type(inputElement, 'JavaScript course')
      
    //Assert
        expect(inputElement.value).toBe('JavaScript course')
        
  });

});