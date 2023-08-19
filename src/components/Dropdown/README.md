
# Dropdown Component

The Dropdown component is a versatile and customizable React component that provides a user-friendly dropdown menu for selecting options.

## Features

- Fully customizable appearance and styling.
- Dropdown can be themed using predefined color schemes.
- Option to specify the width of the dropdown container.
- Click outside the dropdown to close it.
- Smooth animation for opening and closing the dropdown.

## Installation

To use the Dropdown component in your React project, follow these steps:

1. Install the package using npm:

```bash
npm install //TODO
```

## Props

-   `placeholder`: A string that is displayed when no option is selected.
-   `options`: An array of objects representing the available options in the dropdown. Each object should have a `label` (string) and a `value` (string or number).
-   `selected`: An object representing the currently selected option. Should have a `label` and a `value`.
-   `setSelected`: A function to update the selected option when an option is clicked.
-   `width` (optional): The width of the dropdown container in pixels.
-   `theme` (optional): The theme of the dropdown, can be `'primary'` (default) or a custom class name.

## Styles

You can customize the appearance of the Dropdown component by applying your own styles. Refer to the provided CSS file for available CSS classes and variables.

## Themes

The Dropdown component supports the following predefined color themes:

-   `primary`
-   `secondary`
-   `success`
-   `danger`
-   `warning`
-   `info`
-   `light`
-   `dark`

Apply a theme by setting the `theme` prop to the desired theme name.
## Example

```JSX
import React, { useState } from 'react';
import Dropdown from '//TODO-dropdown-component-name'; 

const App = () => {
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        // Add more options here
    ];

    const [selectedOption, setSelectedOption] = useState({});

    const handleOptionChange = (newOption) => {
        setSelectedOption(newOption);
    };

    return (
        <div>
            <h1>Your App</h1>
            <Dropdown
                placeholder="Select an option"
                options={options}
                selected={selectedOption}
                setSelected={handleOptionChange}
                width={200} // Optional: Set the width of the dropdown
                theme="primary" // Optional: Set a color theme for the dropdown
            />
        </div>
    );
};

export default App;
```
