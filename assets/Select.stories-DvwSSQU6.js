import{i as e,s as t}from"./preload-helper-BU24E5rB.js";import{C as n}from"./iframe-BbP_8DvL.js";import{t as r}from"./jsx-runtime-DDF3vUgL.js";var i,a,o=e((()=>{i=t(n(),1),a=(0,i.createContext)(null)}));function s({value:e,children:t,disabled:n}){let r=(0,c.useContext)(a);if(!r)throw Error(`Select.Option must be used inside Select`);let i=r.selected===e;return(0,l.jsx)(`div`,{role:`option`,"aria-selected":i,"aria-disabled":n,onClick:()=>!n&&r.onSelect(e,String(t)),style:{padding:`8px 12px`,fontSize:`var(--font-size-sm)`,color:n?`var(--color-text-disabled)`:i?`var(--color-primary)`:`var(--color-text-primary)`,backgroundColor:i?`var(--color-surface)`:`transparent`,cursor:n?`not-allowed`:`pointer`,fontWeight:i?600:400},children:t})}var c,l,u=e((()=>{c=t(n(),1),o(),l=r(),s.__docgenInfo={description:``,methods:[],displayName:`SelectOption`,props:{value:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``}}}})),d,f,p,m,h=e((()=>{d=t(n(),1),o(),u(),f=r(),p=(0,d.forwardRef)(({label:e,placeholder:t=`Select an option...`,error:n,helperText:r,onChange:i,children:o,style:s})=>{let[c,l]=(0,d.useState)(!1),[u,p]=(0,d.useState)(``),[m,h]=(0,d.useState)(``),g=(0,d.useRef)(null),_=(e,t)=>{p(e),h(t),l(!1),i?.(e)};return(0,d.useEffect)(()=>{function e(e){g.current&&!g.current.contains(e.target)&&l(!1)}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,f.jsxs)(`div`,{ref:g,style:{display:`flex`,flexDirection:`column`,gap:`4px`,position:`relative`,...s},children:[e&&(0,f.jsx)(`label`,{style:{fontSize:`var(--font-size-sm)`,fontWeight:500,color:n?`var(--color-danger)`:`var(--color-text-primary)`},children:e}),(0,f.jsxs)(`div`,{role:`combobox`,"aria-expanded":c,onClick:()=>l(e=>!e),style:{padding:`8px 12px`,fontSize:`var(--font-size-sm)`,color:u?`var(--color-text-primary)`:`var(--color-text-secondary)`,backgroundColor:`var(--color-surface)`,border:`1px solid ${n?`var(--color-danger)`:`var(--color-border)`}`,borderRadius:`var(--radius-md)`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,userSelect:`none`},children:[m||t,(0,f.jsx)(`span`,{style:{transition:`transform var(--transition-fast)`,display:`inline-block`,transform:c?`rotate(180deg)`:`rotate(0deg)`},children:`▾`})]}),c&&(0,f.jsx)(`div`,{role:`listbox`,style:{position:`absolute`,top:`calc(100% + 4px)`,left:0,right:0,backgroundColor:`var(--color-bg)`,border:`1px solid var(--color-border)`,borderRadius:`var(--radius-md)`,boxShadow:`var(--shadow-md)`,zIndex:50,overflow:`hidden`},children:(0,f.jsx)(a.Provider,{value:{open:c,selected:u,onSelect:_},children:o})}),(r||n)&&(0,f.jsx)(`span`,{style:{fontSize:`var(--font-size-xs)`,color:n?`var(--color-danger)`:`var(--color-text-secondary)`},children:n??r})]})}),p.displayName=`Select`,m=Object.assign(p,{Option:s}),p.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{label:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Select an option..."`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}}}})),g,_,v,y,b,x,S;e((()=>{h(),g=r(),_={title:`Components/Select`,component:m,parameters:{layout:`centered`},tags:[`autodocs`]},v={render:()=>(0,g.jsx)(`div`,{style:{width:`280px`},children:(0,g.jsxs)(m,{label:`Framework`,onChange:e=>console.log(e),children:[(0,g.jsx)(m.Option,{value:`react`,children:`React`}),(0,g.jsx)(m.Option,{value:`vue`,children:`Vue`}),(0,g.jsx)(m.Option,{value:`svelte`,children:`Svelte`})]})})},y={render:()=>(0,g.jsx)(`div`,{style:{width:`280px`},children:(0,g.jsxs)(m,{label:`Role`,placeholder:`Select your role...`,children:[(0,g.jsx)(m.Option,{value:`engineer`,children:`Engineer`}),(0,g.jsx)(m.Option,{value:`designer`,children:`Designer`}),(0,g.jsx)(m.Option,{value:`pm`,children:`Product Manager`})]})})},b={render:()=>(0,g.jsx)(`div`,{style:{width:`280px`},children:(0,g.jsxs)(m,{label:`Plan`,children:[(0,g.jsx)(m.Option,{value:`free`,children:`Free`}),(0,g.jsx)(m.Option,{value:`pro`,children:`Pro`}),(0,g.jsx)(m.Option,{value:`enterprise`,disabled:!0,children:`Enterprise (Coming soon)`})]})})},x={render:()=>(0,g.jsx)(`div`,{style:{width:`280px`},children:(0,g.jsxs)(m,{label:`Country`,error:`Please select a country`,children:[(0,g.jsx)(m.Option,{value:`us`,children:`United States`}),(0,g.jsx)(m.Option,{value:`il`,children:`Israel`}),(0,g.jsx)(m.Option,{value:`uk`,children:`United Kingdom`})]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Select label="Framework" onChange={v => console.log(v)}>
        <Select.Option value="react">React</Select.Option>
        <Select.Option value="vue">Vue</Select.Option>
        <Select.Option value="svelte">Svelte</Select.Option>
      </Select>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Select label="Role" placeholder="Select your role...">
        <Select.Option value="engineer">Engineer</Select.Option>
        <Select.Option value="designer">Designer</Select.Option>
        <Select.Option value="pm">Product Manager</Select.Option>
      </Select>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Select label="Plan">
        <Select.Option value="free">Free</Select.Option>
        <Select.Option value="pro">Pro</Select.Option>
        <Select.Option value="enterprise" disabled>
          Enterprise (Coming soon)
        </Select.Option>
      </Select>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "280px"
  }}>
      <Select label="Country" error="Please select a country">
        <Select.Option value="us">United States</Select.Option>
        <Select.Option value="il">Israel</Select.Option>
        <Select.Option value="uk">United Kingdom</Select.Option>
      </Select>
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithPlaceholder`,`WithDisabledOption`,`WithError`]}))();export{v as Default,b as WithDisabledOption,x as WithError,y as WithPlaceholder,S as __namedExportsOrder,_ as default};