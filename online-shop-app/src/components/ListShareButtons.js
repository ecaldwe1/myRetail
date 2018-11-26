import React from 'react';

function ListShareButtons() {
    return (
        <div className="row static-position">
            <div className="col-4">
                <button type="button" className="btn btn-light btn-sm minor-btn">ADD TO REGISTRY</button>
            </div>
            <div className="col-4">
                <button type="button" className="btn btn-light btn-sm minor-btn">ADD TO LIST</button>
            </div>
            <div className="col-4">
                <button type="button" className="btn btn-light btn-sm minor-btn">SHARE</button>
            </div>
        </div>
    );
}

export default ListShareButtons;