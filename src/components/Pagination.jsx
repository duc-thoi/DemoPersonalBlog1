import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({
  className = "",
  propBorderTop,
  arrowLeft,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  propColor7,
  propColor8,
  arrowRight,
}) => {
  const paginationStyle = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const text5Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const numberStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const number1Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const number2Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const number3Style = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const number4Style = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const number5Style = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const number6Style = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const text6Style = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  return (
    <div className={`pagination ${className}`} style={paginationStyle}>
      <div className="previous-button-wrapper">
        <div className="button8">
          <div className="button-base3">
            <img
              className="arrow-left-icon"
              loading="lazy"
              alt=""
              src={arrowLeft}
            />
            <div className="text55" style={text5Style}>
              Previous
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-numbers">
        <div className="pagination-number-base">
          <div className="content31">
            <div className="number" style={numberStyle}>
              1
            </div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content32">
            <div className="number" style={number1Style}>
              2
            </div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content33">
            <div className="number" style={number2Style}>
              3
            </div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content34">
            <div className="number" style={number3Style}>
              ...
            </div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content32">
            <div className="number" style={number4Style}>
              8
            </div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content32">
            <div className="number" style={number5Style}>
              9
            </div>
          </div>
        </div>
        <div className="pagination-number-base1">
          <div className="content37">
            <div className="number" style={number6Style}>
              10
            </div>
          </div>
        </div>
      </div>
      <div className="previous-button-wrapper">
        <div className="button8">
          <div className="button-base3">
            <div className="text56" style={text6Style}>
              Next
            </div>
            <img
              className="arrow-left-icon"
              loading="lazy"
              alt=""
              src={arrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  arrowLeft: PropTypes.string,
  arrowRight: PropTypes.string,

  /** Style props */
  propBorderTop: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
  propColor2: PropTypes.any,
  propColor3: PropTypes.any,
  propColor4: PropTypes.any,
  propColor5: PropTypes.any,
  propColor6: PropTypes.any,
  propColor7: PropTypes.any,
  propColor8: PropTypes.any,
};

export default Pagination;
