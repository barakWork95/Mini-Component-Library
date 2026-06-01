import{i as e,s as t}from"./preload-helper-BU24E5rB.js";import{C as n}from"./iframe-BbP_8DvL.js";import{t as r}from"./jsx-runtime-DDF3vUgL.js";import{n as i,t as a}from"./Input-zbGmT0V5.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(n(),1),i(),s=r(),c={title:`Components/Input`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{disabled:{control:`boolean`}}},l={args:{placeholder:`Type something...`}},u={args:{label:`Email`,placeholder:`you@example.com`}},d={args:{label:`Username`,placeholder:`Enter username`,helperText:`Must be at least 3 characters`}},f={args:{label:`Password`,placeholder:`Enter password`,error:`Password is required`}},p={args:{label:`Disabled`,placeholder:`Can't touch this`,disabled:!0}},m={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{label:`Controlled Input`,value:e,onChange:e=>t(e.target.value),placeholder:`Type here...`,helperText:`${e.length} characters`,style:{width:`280px`}})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type something..."
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "you@example.com"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Must be at least 3 characters"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter password",
    error: "Password is required"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    placeholder: "Can't touch this",
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <Input label="Controlled Input" value={value} onChange={e => setValue(e.target.value)} placeholder="Type here..." helperText={\`\${value.length} characters\`} style={{
      width: "280px"
    }} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithLabel`,`WithHelperText`,`WithError`,`Disabled`,`Controlled`]}))();export{m as Controlled,l as Default,p as Disabled,f as WithError,d as WithHelperText,u as WithLabel,h as __namedExportsOrder,c as default};