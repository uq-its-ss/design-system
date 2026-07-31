// Tell anyone importing "@uqds/package/css" that it's a CSS file.
declare module "./css" {
  const content: string;
  export default content;
}
