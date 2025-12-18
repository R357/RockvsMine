export const exportToCSV = (history) => {
  if (history.length === 0) {
    alert('No data to export!');
    return;
  }

  const headers = ['#', 'Prediction', 'Confidence', 'Timestamp', 'Input'];
  const rows = history.map((item, index) => [
    index + 1,
    item.prediction,
    `${item.confidence}%`,
    new Date(item.timestamp).toLocaleString(),
    item.input
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `rock-mine-predictions-${Date.now()}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
