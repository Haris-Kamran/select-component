# Select Web Component

A lightweight, customizable Web Component that provides an enhanced dropdown/select element with modern styling capabilities and zero dependencies.

## Overview

Select is a reusable Web Component built with modern web standards (Custom Elements API and Shadow DOM) that offers a drop-in replacement for native HTML select elements with improved customization options and consistent cross-browser behavior.

## Features

- 🎨 **Full Style Control**: Complete CSS customization through shadow parts
- 🌐 **Cross-Browser Consistency**: Uniform appearance and behavior across all modern browsers
- 📦 **Zero Dependencies**: Pure vanilla JavaScript implementation
- 🔒 **Style Encapsulation**: Shadow DOM prevents style conflicts
- ⚡ **Lightweight**: ~3KB uncompressed, ~1.5KB minified
- ♿ **Accessible**: Semantic HTML structure with keyboard navigation support
- 🎯 **Framework Agnostic**: Works with React, Vue, Angular, or vanilla JS
- 📱 **Responsive**: Adapts to different screen sizes and contexts

## Browser Support

- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+ (Chromium-based)

Requires browsers with Web Components support (Custom Elements v1, Shadow DOM v1).

## Installation

### Option 1: Direct Download
Download `src/index.js` and include it in your project:

```html
<script type="module" src="path/to/index.js"></script>
```

### Option 2: NPM (Coming Soon)
```bash
npm install select-component
```

### Option 3: CDN (Coming Soon)
```html
<script type="module">
  import 'https://cdn.example.com/select-component.js';
</script>
```

## Usage

### Basic HTML Usage

```html
<select-component 
  label="Choose an option"
  name="mySelect"
  value="option2">
</select-component>

<script type="module">
  const select = document.querySelector('select-component');
  select.setOptions([
    { value: 'option1', label: 'First Option' },
    { value: 'option2', label: 'Second Option' },
    { value: 'option3', label: 'Third Option' }
  ]);
</script>
```

### Declarative Options

You can define options directly in HTML using a JSON attribute:

```html
<select-component 
  label="Choose an option"
  options='[
    {"value": "1", "label": "One"},
    {"value": "2", "label": "Two"},
    {"value": "3", "label": "Three"}
  ]'>
</select-component>
```

### JavaScript API

```javascript
// Get the element
const select = document.querySelector('select-component');

// Set options programmatically
select.setOptions([
  { value: '1', label: 'Option One' },
  { value: '2', label: 'Option Two' },
  { value: '3', label: 'Option Three' }
]);

// Get/set value
console.log(select.value); // Get current value
select.value = '2'; // Set value

// Listen for changes
select.addEventListener('value-change', (e) => {
  console.log('New value:', e.detail.value);
});

// Disable/enable
select.setAttribute('disabled', ''); // Disable
select.removeAttribute('disabled'); // Enable
```

### Framework Integration

#### React
```jsx
import { useRef, useEffect } from 'react';

function MyComponent() {
  const selectRef = useRef(null);
  
  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.setOptions([
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' }
      ]);
    }
  }, []);
  
  return <select-component ref={selectRef} label="Choose option" />;
}
```

#### Vue
```vue
<template>
  <select-component 
    ref="mySelect" 
    label="Choose option"
    @value-change="handleChange">
  </select-component>
</template>

<script>
export default {
  mounted() {
    this.$refs.mySelect.setOptions([
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' }
    ]);
  },
  methods: {
    handleChange(e) {
      console.log('Value changed:', e.detail.value);
    }
  }
}
</script>
```

## API Reference

### Attributes

| Attribute | Type | Description | Example |
|-----------|------|-------------|---------|
| `label` | string | Text label above the select | `label="Choose option"` |
| `name` | string | Name attribute for form submission | `name="country"` |
| `value` | string | Currently selected value | `value="us"` |
| `disabled` | boolean | Disable the select element | `disabled` |
| `options` | JSON string | Options array in JSON format | `options='[{"value":"1","label":"One"}]'` |

### Properties

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `value` | string | Get/set the current value | `select.value = '2'` |

### Methods

| Method | Parameters | Description | Example |
|--------|------------|-------------|---------|
| `setOptions()` | `options: Array<{value, label}>` | Set available options | `select.setOptions([{value: '1', label: 'One'}])` |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `value-change` | `{ value: string }` | Fired when the selected value changes |

### CSS Shadow Parts

Style the component using CSS shadow parts:

```css
/* Style the label */
select-component::part(label) {
  font-weight: bold;
  color: #333;
}

/* Style the select element */
select-component::part(select) {
  border-color: #007bff;
  border-radius: 8px;
}
```

## Styling Examples

### Basic Customization
```css
select-component {
  font-family: 'Arial', sans-serif;
}

select-component::part(label) {
  font-size: 14px;
  margin-bottom: 8px;
  color: #555;
}

select-component::part(select) {
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 6px;
  min-width: 200px;
}

select-component::part(select):focus {
  outline: none;
  border-color: #007bff;
}
```

### Themed Select
```css
.select-primary::part(select) {
  background: #007bff;
  color: white;
  border-color: #0056b3;
}

.select-success::part(select) {
  background: #28a745;
  color: white;
  border-color: #1e7e34;
}
```

## Development

### Setup
No build process required! This is a zero-dependency project.

1. Clone or download the project
2. Open `src/index.js` in your editor
3. Make changes as needed
4. Test directly in your browser

### Project Structure
```
select/
├── src/
│   └── index.js          # Main Web Component implementation
├── memory-bank/          # Project documentation
├── package.json          # NPM package configuration
├── README.md            # This file
└── .clinerules/         # Cline AI assistant rules
```

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 54+ | ✅ Supported |
| Firefox | 63+ | ✅ Supported |
| Safari | 10.1+ | ✅ Supported |
| Edge | 79+ | ✅ Supported |

## Performance

- **Bundle Size**: ~3KB uncompressed
- **Minified**: ~1.5KB estimated
- **Gzipped**: <1KB estimated
- **Runtime**: Fast instantiation via template cloning
- **Memory**: Low overhead with single template reuse

## Security

- **XSS Prevention**: Uses `textContent` for user-provided data
- **Safe JSON Parsing**: Try-catch error handling for attribute parsing
- **No eval()**: No dynamic code execution
- **Content Security Policy**: Compatible with strict CSP policies

## License

MIT License - see LICENSE file for details

## Support

- 📖 **Documentation**: Check the `memory-bank/` directory for detailed technical documentation
- 🐛 **Issues**: Report bugs and feature requests via GitHub issues
- 💬 **Discussions**: Join discussions in GitHub Discussions

## Roadmap

### Phase 1: Foundation ✅
- [x] Core component implementation
- [x] Basic functionality working
- [x] Memory bank documentation
- [x] Component renaming completed

### Phase 2: Production Ready (Current)
- [ ] Comprehensive testing
- [ ] Complete user documentation
- [ ] Interactive demo page
- [ ] NPM package setup

### Phase 3: Enhanced Features
- [ ] Multi-select support
- [ ] Search/filter functionality
- [ ] Option groups
- [ ] Framework wrappers

### Phase 4: Ecosystem
- [ ] Developer tools
- [ ] Advanced theming
- [ ] Community contributions
- [ ] Enterprise features

## Acknowledgments

Built with modern web standards and following Web Components best practices. Special thanks to the Web Components community for their excellent documentation and examples.

---

**Made with ❤️ using vanilla JavaScript and Web Components**
