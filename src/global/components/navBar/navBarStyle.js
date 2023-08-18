import styled from 'styled-components'
export const Tab=styled.span` font-weight: 500;
user-select: none;
cursor: pointer;
padding:15px 0;
height:100%;
position:relative;

color:${({isSelected})=> (isSelected? '#000000' :'#767676')};
&::after{

    content:'';
    width:100%;
    border-bottom:4px solid ${({isSelected})=> (isSelected? '#000000' :'transparent')};
    position:absolute;
    bottom:0;
    left:0;

}

`;
