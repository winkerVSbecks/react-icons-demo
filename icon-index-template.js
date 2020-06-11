const path = require('path');

function indexTemplate(files) {
  const compoundExportEntries = [];

  const importEntries = files.map((file) => {
    const componentName = path.basename(file, path.extname(file));
    compoundExportEntries.push(componentName);

    return `import { default as ${componentName} } from './${componentName}';`;
  });

  return `${importEntries.join('\n')}

    export const Icons = {
      ${compoundExportEntries.join(',\n  ')}
    };
  `;
}

module.exports = indexTemplate;
