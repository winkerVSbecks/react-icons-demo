function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports },
) {
  const styledComponentName = 'Styled' + componentName;

  return template.ast`
    ${imports}
    import styled from 'styled-components';

    const SVG = (${props}) => ${jsx};

    const ${componentName} = styled(SVG)\`
      display: \${(props) => (props.block ? 'block' : 'inline-block')};
      font-size: \${(props) => (props.fontSize ? props.fontSize : '16px')};
      color: \${(props) => (props.color ? props.color : '#ccc')};
      vertical-align: middle;
      shape-rendering: inherit;
      transform: translate3d(0, 0, 0);
    \`;

    export default ${componentName};
  `;
}

module.exports = template;
