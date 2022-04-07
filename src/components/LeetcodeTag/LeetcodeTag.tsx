import React, {ReactNode} from "react";

type TagCategory =  'simple' | 'medium' | 'hard'
interface Props {
    children: ReactNode;
    category: TagCategory
}

const LeetcodeTag = ({children, category} :Props) : JSX.Element => {
    const colors = {
        simple: '#00b8a3',
        medium: '#ffb800',
        hard: '#ff3741'
    }
    return <span style={{ color: colors[category] }}>
        {children}
    </span>
}

const SimpleTag = ({children}) : JSX.Element => <LeetcodeTag category="simple" >简单</LeetcodeTag>
const MediumTag = ({children}) : JSX.Element => <LeetcodeTag category="medium" >中等</LeetcodeTag>
const HardTag = ({children}) : JSX.Element => <LeetcodeTag category="hard" >困难</LeetcodeTag>

export { SimpleTag, MediumTag, HardTag }