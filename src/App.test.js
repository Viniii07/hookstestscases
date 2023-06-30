// import { render, screen } from "@testing-library/react";
// import App from "./App";

// describe("App component",()=>{
//   it("should render Hydrabad",()=>{
//     render(<App/>);
//     expect(screen.getByText("Hydrabad")).toBeInTheDocument();
//   })
//   it("should name and input field",()=>{
//     render(<App/>);
//     expect(screen.getByText("Name")).toBeInTheDocument();
//     expect(screen.getByTestId("input-name")).toBeInTheDocument();
//     expect(screen.getByTestId("input-password")).toBeInTheDocument();
//     expect(screen.getByTestId("input-name").value).toBe("Sachin");
//     expect(screen.getByTestId("input-password").value).toBe("123");
//     // expect(screen.getByRole("textbox")).toBeInTheDocument();
//     // expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument();
//   })
// })

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component",()=>{
  beforeEach(()=>{
    render(<App/>)
  })
  it("should render header of the component",()=>{
    expect(screen.getByText("Count")).toBeInTheDocument();
  })
  it("should render count value as zero by default",()=>{
    expect(screen.getByTestId("count")).toBeInTheDocument();
    expect(screen.getByTestId("count").innerHTML).toBe("0");
  })
  it("should render inc,dec and input field",()=>{
    expect(screen.getByTestId("inc")).toBeInTheDocument();
    expect(screen.getByTestId("dec")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
  })
  it("should inc and dec the count",()=>{
    const inputRef=screen.getByTestId("input");
    fireEvent.change(inputRef,{
      target:{
        value:"10"
      }
    })
    expect(inputRef.value).toBe("10")
  })
  it("should inc and dec the count",()=>{
    const inc=screen.getByText("Inc")
    const dec=screen.getByText("Dec")
    const inputRef=screen.getByTestId("input");
    const count=screen.getByTestId("count")
    fireEvent.change(inputRef,{
      target:{
        value:"10"
      }
    })
    fireEvent.click(inc)
    expect(count.innerHTML).toBe("10")
    fireEvent.click(dec)
    expect(count.innerHTML).toBe("0")
    fireEvent.click(dec)
    expect(count.innerHTML).toBe("-10")
})
it("should render correct prop",()=>{
  render(<App loc="karnataka"/>)
  expect(screen.getByText("karnataka")).toBeInTheDocument();

})
})