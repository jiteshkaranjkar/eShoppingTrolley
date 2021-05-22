import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <div>
      <App />
    </div>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders App with just with incorrect url and Loading text", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("Loading...");

});


it("renders product data", async () => {
  const fakeProduct = {
    id: 1,
    brand: "Victoria Bitter",
    name: "Victoria Bitter VB 375mL Bottle",
    Type: "Lager",
    description: "Victoria Bitter",
    Price: 21.49,
    PromtionalPrice: 19.49
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeProduct)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<App id="123" />, container);
  });

  expect(container.querySelector("Victoria Bitter").textContent).toBe(fakeUser.brand);
  expect(container.querySelector("21.49").textContent).toBe(fakeUser.price);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});