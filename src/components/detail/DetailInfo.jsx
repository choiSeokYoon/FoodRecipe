import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { recoilDetailData } from '../../recoil/atom'
import './DetailInfo.scss'
import Chart from 'chart.js/auto'

export default function DetailInfo() {
    const detailPosts = useRecoilValue(recoilDetailData)
    const [teb , setTeb] = useState(1) 
    // 메뉴얼객체에서 밸류 값들만 꺼냄
    const detailManual = Object.keys(detailPosts)
    .filter(key => key.includes('MANUAL') && !key.includes('MANUAL_IMG') && detailPosts[key] !== '')
    .map(key => detailPosts[key]).sort() 

    useEffect(() => {
        const ctx = document.getElementsByClassName('myChart')
        if (teb === 2 && ctx) {
            const myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['열량', '탄수화물', '단백질', '지방', '나트륨'],
                    datasets: [{
                        data: [detailPosts.INFO_ENG, detailPosts.INFO_CAR, detailPosts.INFO_PRO, detailPosts.INFO_FAT, detailPosts.INFO_NA],
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#FF9F40',
                            '#4BC0C0'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#FF9F40',
                            '#4BC0C0'
                        ]
                    }]
                }
            })
            return () => {
                myChart.destroy()
            }
        }
    }, [teb, detailPosts])

    return (
        <div className="detail_item_right">
            <div className='detail_name'>
                <h2>{detailPosts.RCP_NM}</h2>
            </div>
            <div className='tab'>
                <button onClick={()=>{setTeb(1)}}
                    className={teb === 1 ? "tab_btn": ""}>MANUAL</button>
                <button onClick={()=>{setTeb(2)}}
                    className={teb === 2 ? "tab_btn": ""}>ETC</button>
            </div>
            <div className='ingredients'>
              <p>{detailPosts.RCP_PARTS_DTLS}</p>  
            </div>
            <ul className='detail_cook'>
                {teb === 1 && detailManual.map((filteredArrs , idx)=>(
                    <li key={idx}>{filteredArrs}</li>
                ))}
            </ul>
            <div className='detail_etc'>
                {teb === 2 && 
                    <canvas className='myChart'></canvas>
                }
            </div>
        </div>
    )
}
