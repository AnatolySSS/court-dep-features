export const mapRows = (rows: any[]) => {
  const groupHeaders = rows[0];
  const keys = rows[1];
  const dataRows = rows.slice(2);

  return dataRows.map((row) => {
    const obj: Record<string, any> = {};
    let currentGroup = '';

    row.forEach((cell, i) => {
      const group = groupHeaders[i] ?? currentGroup;
      currentGroup = group;

      obj[group] ??= {};
      obj[group][keys[i]] = cell;
    });

    return obj;
  });
};
