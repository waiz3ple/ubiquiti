import { render, screen, within } from "@testing-library/react";
import TableList from "./TableList";

describe("TableList", ()=>{
  test('Header render', async ()=>{
    render(<TableList/>);

    const tbody = screen.getByRole('table').querySelector('tbody');  // eslint-disable-line 
    const tableRows = await within(tbody!).findAllByRole('row');
    expect(tableRows).toHaveLength(3);
  })
})
export { };
