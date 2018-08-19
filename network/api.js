import axios from 'axios';

class ExamApi {

  constructor() {
    this.exam_url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
  }

  async fetchExam() {
    try{
      const res = await axios.get(this.exam_url);
      
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}

export default ExamApi;
