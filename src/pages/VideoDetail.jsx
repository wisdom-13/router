import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { vidoeId } = useParams();
  return <div>VideoDetail : {vidoeId}</div>
}