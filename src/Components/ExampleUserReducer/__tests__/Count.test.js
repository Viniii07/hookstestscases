import { fireEvent, render, screen } from "@testing-library/react";
import { Count } from "../Count";

describe("Count Component",()=>{
    it("should show buttons",()=>{
        render(<Count/>)
        expect(screen.getByText("Inc")).toBeInTheDocument();
        expect(screen.getByText("Reset")).toBeInTheDocument();
        expect(screen.getByText("Dec")).toBeInTheDocument();
    });
    it("should inc count",()=>{
        render(<Count/>);
        const incBtn=screen.getByText("Inc")
        const resetBtn=screen.getByText("Reset")
        const decBtn=screen.getByText("Dec")
        fireEvent.click(incBtn)
        expect(screen.getByText("COUNT::1")).toBeInTheDocument();
        fireEvent.click(resetBtn)
        expect(screen.getByText("COUNT::0")).toBeInTheDocument();
        fireEvent.click(decBtn)
        expect(screen.getByText("COUNT::-1")).toBeInTheDocument();

    })
})