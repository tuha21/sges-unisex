import React from "react";

// const { pageNumber, pageSize, first, last, setPageNumber, setPageSize } = useContext(PageContext)

const prevOnClick = () => {
    // if (first === false) {
    //     setPageNumber(pageNumber - 1)
    // }
};

const nextOnClick = () => {
    // if (last === false) {
    //     setPageNumber(pageNumber + 1)
    // }
};

const onChangePageSize = (event: any) => {
    // setPageSize(event.target.value as number)
};

const Paginate = () => {
    return (
        <div className="paginate-footer">
            <div className="pagination row d-flex align-items-center">
                <div className="col">
                    Hiển thị
                    <select className="col pageSize mx-3" onChange={onChangePageSize}>
                        <option key={5} value="5">
                            5
                        </option>
                        <option key={10} value="10">
                            10
                        </option>
                        <option key={15} value="15">
                            15
                        </option>
                    </select>
                    bản ghi
                </div>
                <div className="pageNumber col-auto">
                    <button className="btn btn-control" onClick={prevOnClick}>
                        Previous
                    </button>

                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn btn-control">3</button>
                    <button className="btn">4</button>
                    <button className="btn">5</button>

                    <button className="btn btn-control" onClick={nextOnClick}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Paginate;
