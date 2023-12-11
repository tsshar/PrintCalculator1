function calculateAmount() {
    const pages = parseInt(document.getElementById('pages').value);
    const books = parseInt(document.getElementById('books').value);
  
    if (!isNaN(pages) && !isNaN(books)) {
      const amount = books * ((pages * 3) + 300);
      const discount = books*50;
      document.getElementById('result').innerText = `Amount to be paid: ₹${amount} \n Total Discount = ₹${discount}`;
    } else {
      document.getElementById('result').innerText = 'Please enter valid numbers';
    }
    
  }
  
