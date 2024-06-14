export default interface Title {
    title:string
}

export const Title = (props:Title)=>{
    return(
        <h4 className="text-[32px] font-semibold">
            {props.title}
        </h4>
    )
}