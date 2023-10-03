const wakeUp = (req, res) => {
  let { data } = req.body;
  res.status(200).send({ message: "Im up" });
};

export { wakeUp };
