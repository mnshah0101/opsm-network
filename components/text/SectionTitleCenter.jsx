export default function SectionTitle({title, subtitle}){
    return (
        <div className="col-12 d-flex justify-content-center flex-column align-items-center my-4 ">
        <h1 className="title-text text-center  mt-5 ">{title}</h1>
        <p className="text-center font-rem-15">{subtitle}</p>

        </div>
    )
}