import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src="http://localhost:1337/uploads/perfumes_01af3d1b74.jpeg" alt="" />
            <button>
                <Link className="link" to="/products/6">Perfumes</Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/6079310/pexels-photo-6079310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <button>
                <Link className="link" to="/products/1">Kids</Link>
            </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="http://localhost:1337/uploads/women_single_a0fdc75ea3.jpeg" alt="" />
            <button>
                <Link className="link" to="/products/2">Women</Link>
            </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <button>
                <Link className="link" to="/products/3">Men</Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="http://localhost:1337/uploads/Accesories_440272e3a8.jpeg" alt="" />
            <button>
                <Link className="link" to="/products/5">Beauty</Link>
            </button>
                </div>
            </div>
        </div>
        <div className="row">
        <img src="http://localhost:1337/uploads/sandal_a1b7ea3a5e.jpg" alt="" />
            <button>
                <Link className="link" to="/products/4">Footwear</Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
