import { useSelector } from 'react-redux'; 
import { RootState } from '../app/store';

function Background() {

    const pagination = useSelector((state:RootState) => state.infoData.pagination)

    switch (pagination) {
      case 1:
        return (
            <header>
                <div id="pagination-container">
                    <div id="pagination-1" className="active">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="">4</div>
                </div>
            </header>
        )
      case 2:
        return (
            <header>
                <div id="pagination-container">
                    <div id="pagination-1" className="">1</div>
                    <div id="pagination-2" className="active">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="">4</div>
                </div>
            </header>
        )
      case 3:
        return (
            <header>
                <div id="pagination-container">
                    <div id="pagination-1" className="">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="active">3</div>
                    <div id="pagination-4" className="">4</div>
                </div>
            </header>
        )
      case 4:
        return (
            <header>
                <div id="pagination-container">
                    <div id="pagination-1" className="">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="active">4</div>
                </div>
            </header>
        )
      case 5:
        return (
            <header>
                <div id="pagination-container">
                    <div id="pagination-1" className="">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="active">4</div>
                </div>
            </header>
        ) 
      default:
        return (
            <header>
                <div id="pagination-container">
                    <div id="pagination-1" className="active">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="">4</div>
                </div>
            </header>
        )
    }
}

export default Background