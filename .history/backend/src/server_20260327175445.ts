on());

// app.get('/', (req, res) => {
//   res.send('Teacher Management API is running...');
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in `);
});

export default app;
