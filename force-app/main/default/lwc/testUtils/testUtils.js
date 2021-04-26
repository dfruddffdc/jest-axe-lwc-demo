import { createElement } from "lwc";

export function clearUp() {
  const body = document.body;

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  jest.clearAllMocks();
}

export function getCreateComponent(componentClass, componentName) {
  return (config = {}) => {
    const component = createElement(componentName, {
      is: componentClass
    });

    Object.assign(component, config);

    document.body.appendChild(component);

    return component;
  };
}

export function flushPromises() {
  return new Promise(setImmediate);
}
