import { useSelector } from 'react-redux'; 
import { RootState } from '../app/store';

function Background() {

    const pagination = useSelector((state:RootState) => state.infoData.pagination)

    switch (pagination) {
      case 1:
        return (
            <header>
                <div className='pagination-container'>
                    <div id="pagination-1" className="active">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="">4</div>
                </div>
                <div className='pagination-container-txt'>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 2</p>
                        <p>SELECT PLAIN</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </div>
            </header>
        )
      case 2:
        return (
            <header>
                <div className='pagination-container'>
                    <div id="pagination-1" className="">1</div>
                    <div id="pagination-2" className="active">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="">4</div>
                </div>
                <div className='pagination-container-txt'>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 2</p>
                        <p>SELECT PLAIN</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </div>
            </header>
        )
      case 3:
        return (
            <header>
                <div className='pagination-container'>
                    <div id="pagination-1" className="">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="active">3</div>
                    <div id="pagination-4" className="">4</div>
                </div>
                <div className='pagination-container-txt'>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 2</p>
                        <p>SELECT PLAIN</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </div>
            </header>
        )
      case 4:
        return (
            <header>
                <div className='pagination-container'>
                    <div id="pagination-1" className="">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="active">4</div>
                </div>
                <div className='pagination-container-txt'>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 2</p>
                        <p>SELECT PLAIN</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </div>
            </header>
        )
      case 5:
        return (
            <header>
                <div className='pagination-container'>
                    <div id="pagination-1" className="">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="active">4</div>
                </div>
                <div className='pagination-container-txt'>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 2</p>
                        <p>SELECT PLAIN</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </div>
            </header>
        ) 
      default:
        return (
            <header>
                <div className='pagination-container'>
                    <div id="pagination-1" className="active">1</div>
                    <div id="pagination-2" className="">2</div>
                    <div id="pagination-3" className="">3</div>
                    <div id="pagination-4" className="">4</div>
                </div>
                <div className='pagination-container-txt'>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 1</p>
                        <p>YOUR INFO</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 2</p>
                        <p>SELECT PLAIN</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 3</p>
                        <p>ADD-ONS</p>
                    </div>
                    <div className='step-div'>
                        <p className='step-pagination'>STEP 4</p>
                        <p>SUMMARY</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Background