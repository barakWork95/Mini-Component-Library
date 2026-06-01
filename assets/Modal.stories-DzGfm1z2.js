import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{C as n}from"./iframe-DQT65nZ8.js";import{t as r}from"./react-dom-j09gfFOa.js";import{t as i}from"./jsx-runtime-CaZkqeYb.js";import{n as a,t as o}from"./Button-Dhi6z_Cg.js";import{n as s,t as c}from"./Input-DT-RZKQn.js";function l({open:e,onClose:t,title:n,children:r,size:i=`md`}){let a=(0,u.useRef)(null);return(0,u.useEffect)(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[e]),(0,u.useEffect)(()=>{if(!e)return;function n(e){e.key===`Escape`&&t()}return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[e,t]),(0,u.useEffect)(()=>{e&&a.current?.focus()},[e]),e?(0,d.createPortal)((0,f.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-title`,onClick:e=>{e.target===e.currentTarget&&t()},style:{position:`fixed`,inset:0,backgroundColor:`rgba(0,0,0,0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:100,padding:`1rem`},children:(0,f.jsxs)(`div`,{style:{backgroundColor:`var(--color-bg)`,borderRadius:`var(--radius-lg)`,boxShadow:`var(--shadow-lg)`,width:`100%`,maxWidth:p[i],maxHeight:`90vh`,overflow:`auto`,display:`flex`,flexDirection:`column`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`1rem 1.5rem`,borderBottom:`1px solid var(--color-border)`},children:[n&&(0,f.jsx)(`h2`,{id:`modal-title`,style:{margin:0,fontSize:`var(--font-size-lg)`,fontWeight:600,color:`var(--color-text-primary)`},children:n}),(0,f.jsx)(`button`,{ref:a,onClick:t,"aria-label":`Close modal`,style:{marginLeft:`auto`,background:`none`,border:`none`,cursor:`pointer`,fontSize:`1.25rem`,color:`var(--color-text-secondary)`,lineHeight:1,padding:`4px`},children:`✕`})]}),(0,f.jsx)(`div`,{style:{padding:`1.5rem`,color:`var(--color-text-primary)`},children:r})]})}),document.body):null}var u,d,f,p,m=e((()=>{u=t(n(),1),d=t(r(),1),f=i(),p={sm:`400px`,md:`560px`,lg:`720px`}})),h,g,_,v,y,b,x,S;e((()=>{h=t(n(),1),m(),a(),s(),g=i(),_={title:`Components/Modal`,component:l,parameters:{layout:`centered`},tags:[`autodocs`]},v={render:()=>{let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{onClick:()=>t(!0),children:`Open Modal`}),(0,g.jsx)(l,{open:e,onClose:()=>t(!1),title:`Basic Modal`,children:(0,g.jsx)(`p`,{style:{color:`var(--color-text-primary)`},children:`Press ESC or click outside to close.`})})]})}},y={render:()=>{let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{onClick:()=>t(!0),children:`Open Form Modal`}),(0,g.jsx)(l,{open:e,onClose:()=>t(!1),title:`Edit Profile`,children:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,g.jsx)(c,{label:`Name`,placeholder:`Your name`}),(0,g.jsx)(c,{label:`Email`,placeholder:`you@example.com`}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,justifyContent:`flex-end`},children:[(0,g.jsx)(o,{variant:`ghost`,onClick:()=>t(!1),children:`Cancel`}),(0,g.jsx)(o,{onClick:()=>t(!1),children:`Save`})]})]})})]})}},b={render:()=>{let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{onClick:()=>t(!0),children:`Small Modal`}),(0,g.jsxs)(l,{open:e,onClose:()=>t(!1),title:`Confirm`,size:`sm`,children:[(0,g.jsx)(`p`,{style:{color:`var(--color-text-primary)`},children:`Are you sure?`}),(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginTop:`1rem`},children:[(0,g.jsx)(o,{variant:`danger`,size:`sm`,onClick:()=>t(!1),children:`Delete`}),(0,g.jsx)(o,{variant:`ghost`,size:`sm`,onClick:()=>t(!1),children:`Cancel`})]})]})]})}},x={render:()=>{let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{onClick:()=>t(!0),children:`Large Modal`}),(0,g.jsx)(l,{open:e,onClose:()=>t(!1),title:`Large Modal`,size:`lg`,children:(0,g.jsx)(`p`,{style:{color:`var(--color-text-primary)`},children:`This is a large modal with more space for content.`})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Basic Modal">
          <p style={{
          color: "var(--color-text-primary)"
        }}>
            Press ESC or click outside to close.
          </p>
        </Modal>
      </>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Edit Profile">
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" placeholder="you@example.com" />
            <div style={{
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end"
          }}>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Small Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm" size="sm">
          <p style={{
          color: "var(--color-text-primary)"
        }}>Are you sure?</p>
          <div style={{
          display: "flex",
          gap: "8px",
          marginTop: "1rem"
        }}>
            <Button variant="danger" size="sm" onClick={() => setOpen(false)}>
              Delete
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      </>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Large Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Large Modal" size="lg">
          <p style={{
          color: "var(--color-text-primary)"
        }}>
            This is a large modal with more space for content.
          </p>
        </Modal>
      </>;
  }
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`WithForm`,`SmallSize`,`LargeSize`]}))();export{v as Basic,x as LargeSize,b as SmallSize,y as WithForm,S as __namedExportsOrder,_ as default};