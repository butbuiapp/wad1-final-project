import { render, screen, fireEvent } from "@testing-library/react";
import NewProduct from '../../pages/NewProduct';
import { BrowserRouter } from "react-router-dom";

const MockNewProduct = () => {
  return (
    <BrowserRouter>
      <NewProduct/>
    </BrowserRouter>
  )
}

describe("New Product", () => {

  it("should render layout", async () => {
    render(<MockNewProduct/>);

    const title = await screen.findByText("Add New Product");
    expect(title).toBeInTheDocument();

    const name = await screen.findByText("Name");
    expect(name).toBeInTheDocument();

    const price = await screen.findByText("Price");
    expect(price).toBeInTheDocument();

    const origin = await screen.findByText("Origin");
    expect(origin).toBeInTheDocument();

    const instock = await screen.findByText("In Stock");
    expect(instock).toBeInTheDocument();

  })

  it("should validate required fields", () => {
    render(<MockNewProduct/>);

    const addBtn = screen.getByRole("button", {name: /Add/i});
    fireEvent.click(addBtn);
    expect(screen.getByText("All fields are required")).toBeInTheDocument();

  })

})