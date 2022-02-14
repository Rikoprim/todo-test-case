import React, { useEffect, useState, useMemo } from 'react'
import { IoCheckmark, IoAlertSharp, IoClose, IoInformation } from "react-icons/io5";
import './toast.css'

const defaulProps = {
    show: false,
    message: '',
    variant: 'success',
    onClose: () => { },
    duration: 2000
}

function Toast(props = { ...defaulProps }) {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        if (props.show) {
            setIsShow(props.show);
            setTimeout(() => {
                setIsShow(false);

                setTimeout(() => {
                    props.onClose()
                }, 800);
            }, props.duration)
        }
    }, [props])


    const checkShow = useMemo(() => {
        return isShow ? 'd-flex align-items-center fade-in' : 'd-flex align-items-center fade-out';
    }, [isShow])

    const checkBgColor = useMemo(() => {
        switch (props.variant) {
            case 'success':
                return '#68cd86'
            case 'warning':
                return '#ffb648'
            case 'error':
                return '#e54d42'
            case 'info':
                return '#2D9CDB'
            default:
                return '#2D9CDB'
        }
    }, [props.variant])

    const checkIcon = useMemo(() => {
        switch (props.variant) {
            case 'success':
                return <IoCheckmark size={36} color="#fff" />
            case 'warning':
                return <IoAlertSharp size={36} color="#fff" />
            case 'error':
                return <IoClose size={36} color="#fff" />
            case 'info':
                return <IoInformation size={36} color="#fff" />
            default:
                return <IoCheckmark size={36} color="#fff" />
        }
    }, [props.variant])

    return (
        <div className='containertoast'>
            <div className='bodytoast'>
                <div className={checkShow}
                    style={{
                        backgroundColor: checkBgColor,
                        borderRadius: '4px',
                        padding: '10px 17px',
                        boxShadow: '4px 7px 24px -7px rgba(0,0,0,0.46)',
                        WebkitBoxShadow: '4px 7px 24px -7px rgba(0,0,0,0.46)',
                        MozBoxShadow: '4px 7px 24px -7px rgba(0,0,0,0.46)',
                    }}
                >
                    {checkIcon}
                    <p className='texttoast'>{props.message}</p>
                </div>
            </div>
        </div >
    )
}

Toast.defaultProps = defaulProps

export default Toast
