// icon props are optional; 
interface iconPropsType {
    size?: number;
    strokeWidth?: number;
    fill?: 'none' | 'currentColor'|'inherit';
    isActive?:boolean;
}

const param = {
    size: 15,
    fill: 'none',
    strokeWidth:1.5
}

//seach icon🔍
export function SearchIcon({ size = 15, fill ='none', strokeWidth = 1.5}: iconPropsType){
  return (
    <svg  fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className="icon search-icon" style={{width:size, cursor:"pointer" }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

// close icon ✖️
export function CloseIcon({size = 15, fill ='none', strokeWidth = 1.5}: iconPropsType){
    return(
    <svg  fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className="icon close-icon" 
        style={{width:size, cursor:"pointer"}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    )
}

// threebars icon for menu list
export function ThreeBarsIcon({size = 15, fill ='none', strokeWidth = 1.5}: iconPropsType){
    return (
    <svg  fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className="icon three-bars-icon" style={{width:size, cursor:"pointer"}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    )
}

// grid icon
export function GridIcon({size = 15, fill ='none', strokeWidth = 1.5}: iconPropsType){
   return(
      <svg  fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className="icon grid-list-icon" style={{width:size, cursor:"pointer"}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

   )
}

//bullet list
export function BulletList({size = 15, fill ='none', strokeWidth = 1.5}: iconPropsType){
    return(
        <svg  fill={fill} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className="icon bullet-list-icon" style={{width:size, cursor:"pointer"}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    )
}

//stop-button  icon ◻️
export function StopButton({size = 15, fill ='none', strokeWidth = 1.5, isActive = false}:iconPropsType){
    return(
        <svg  fill={isActive? 'currentColor':'none'} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className="stop-button" style={{width:size, cursor:"pointer"}}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
        </svg>
    )
}