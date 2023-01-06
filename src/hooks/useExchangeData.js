import { useEffect, useState } from "react";
import socketIO from 'socket.io-client';
import {base_url,rates_url} from '../config/config';

const socket = socketIO.connect(base_url);

const useExchangeData = () => {
  const [exchangeData, setExchangeData] = useState([]);
  const [backupData, setBackupData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    socket.on('new_rate', (data) => {
      const {createdAt, ...others} = data;
      let formatedDate = formatDate(createdAt);
      const newData = {formatedDate, ...data};
      const newExchangeData = [newData,...exchangeData];
      setExchangeData(newExchangeData);
      setBackupData(newExchangeData);
    });
  }, [socket, exchangeData]);
  
  useEffect(() => {
    setLoading(true);
    fetch(rates_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const preparedData = [];
        data.forEach((d) => {
          const { createdAt } = d;
          let formatedDate = formatDate(createdAt);
          preparedData.push({
            ...d, formatedDate
          });
        });
        setExchangeData(preparedData);
        setBackupData(preparedData);
        // exchangeData(data);
      })
      .finally(() => setLoading(false));
  }, []);
  
  const formatDate =(createdAt)=>{
    const date = new Date(createdAt);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
        month = `0${month}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  return { exchangeData,backupData, isLoading,setExchangeData };
};

export default useExchangeData;