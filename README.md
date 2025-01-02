# JavaScript Utilities Repository

## Overview
This repository is a collection of standalone JavaScript utilities, each focusing on a specific area of functionality. The repository is designed to help developers with ready-to-use, modular code that can be easily integrated into various projects. Each utility is organized into a dedicated folder with its code and a detailed `README.md` file explaining usage examples.

## Repository Structure

```plaintext
JavaScript-Utilities/
├── Infinite_Scrolling/
│   ├── By_Simple_Await.js
│   ├── By_Generator_Function.js
│   ├── With_Intersection_Observer.js
│   └── README.md
├── Throttling_and_Debouncing/
│   ├── Throttling.js
│   ├── Debouncing.js
│   ├── Custom_Configurations.js
│   └── README.md
├── Closures/
│   ├── Counter_Utility.js
│   ├── Memoization.js
│   ├── Private_State_Management.js
│   └── README.md
├── DOM_Manipulation/
│   ├── Element_Selector_Helpers.js
│   ├── Class_Toggle_Utility.js
│   ├── Create_Append_Elements.js
│   └── README.md
├── Array_Object_Utilities/
│   ├── Deep_Clone.js
│   ├── Flatten_Nested_Arrays.js
│   ├── Find_Unique_Elements.js
│   ├── Merge_Multiple_Objects.js
│   └── README.md
├── String_Utilities/
│   ├── Slugify.js
│   ├── String_Truncation.js
│   ├── Case_Converters.js
│   └── README.md
├── API_Utilities/
│   ├── Fetch_Wrapper.js
│   ├── Retry_Mechanism.js
│   ├── Rate_Limiter.js
│   └── README.md
├── Event_Handling/
│   ├── Event_Delegation.js
│   ├── Custom_Event_Emitters.js
│   ├── Single_Execution_Listeners.js
│   └── README.md
├── Asynchronous_Utilities/
│   ├── Promise_Queue_Manager.js
│   ├── Promise_Timeout_Wrapper.js
│   ├── Parallel_Execution_With_Limit.js
│   └── README.md
├── Validation_Utilities/
│   ├── Email_Validator.js
│   ├── URL_Validator.js
│   ├── Alphanumeric_Checker.js
│   └── README.md
├── Math_Utilities/
│   ├── Clamp_Utility.js
│   ├── Random_Number_Generator.js
│   ├── Percentage_Calculator.js
│   └── README.md
├── Storage_Utilities/
│   ├── LocalStorage_SessionStorage.js
│   ├── Cookie_Manager.js
│   ├── Data_Persistence_With_Expiry.js
│   └── README.md
├── Animations_and_Scrolling/
│   ├── Smooth_Scroll.js
│   ├── Scroll_Progress_Bar.js
│   ├── Fade_In_Out.js
│   └── README.md
├── Security_Utilities/
│   ├── Sanitize_Input.js
│   ├── CSRF_Token_Generator.js
│   ├── Simple_Hash_Function.js
│   └── README.md
├── Miscellaneous_Utilities/
│   ├── UUID_Generator.js
│   ├── Clipboard_Copy.js
│   ├── Dark_Mode_Toggle.js
│   ├── Custom_Logger.js
│   └── README.md
└── README.md
```

## How to Use
1. Clone the repository:
   ```bash
   [https://github.com/letsbegincode/JS-Utility-Hub.git]
   ```
2. Navigate to the folder of the desired utility.
3. Import the utility function(s) into your project using ES Modules:
   ```javascript
   import { utilityFunctionName } from './path_to_utility.js';
   ```
4. Refer to the `README.md` file within each folder for detailed usage examples.

## Features
- **Modular Code**: Each utility is self-contained, allowing for easy integration.
- **Extensive Documentation**: Each folder contains a `README.md` with usage examples and descriptions.
- **Real-World Use Cases**: Utilities are designed for common tasks encountered in web development.

## Contribution
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request with your changes. Ensure to include a `README.md` file for any new utility.

## License
This repository is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
