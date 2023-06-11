import { render, screen } from "@testing-library/react";
import GridList from "./GridList";

describe("TableList", ()=>{
  test('Header render', async ()=>{
    render(<GridList/>);

    const images = await screen.findAllByRole('img');  
    expect(images).toHaveLength(images.length);
  })
})
export { };
