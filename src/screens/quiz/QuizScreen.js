import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import he from 'he';

import styles from './styles/QuizScreen';

import ExamApi from '../../../network/api';

const examApi = new ExamApi();

class QuizScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // questions from backend, stored here
      exam: undefined,
      // pointer point to the current question
      count: 0,
      // right or wrong of answer
      answers: [],
    };
  }

  componentDidMount() {
    this.fff();
  }

  // fetch questions from backend and refresh the screen
  async fff() {
    this.setState({
      exam: await examApi.fetchExam(),
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.exam !== undefined) {
      const encodedStr = this.state.exam.results[this.state.count].question;

      // decode &quot; abc &quot; to "abc"
      const decodedStr = he.decode(encodedStr);

      return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.title}>{this.state.exam.results[this.state.count].category}</Text>
          </View>
          <View style={styles.middle}>
            <View style={styles.roblox}>
              <Text style={styles.question}>{decodedStr}</Text>
            </View>
            <View style={styles.progress}>
              <Text>{this.state.count + 1} of {this.state.exam.results.length}</Text>
            </View>
            <View style={styles.bottom}>
              <Button
                onPress={() => {
                  // record right or wrong of the answer to answers array
                  if (this.state.exam.results[this.state.count].correct_answer === 'True') {
                    this.state.answers.push('correct');
                  } else {
                    this.state.answers.push('incorrect');
                  }
                  if (this.state.count + 1 === this.state.exam.results.length) {
                    // amount of questions
                    const t = this.state.exam.results.length;
                    // right or wrong of answers
                    const { answers } = this.state;
                    navigate('Results', {
                      total: t,
                      answers,
                    });
                  } else {
                    this.setState({ count: this.state.count += 1 });
                  }
                }}
                title="TRUE "
                color="#584"
              />
              <Text />
              <Button
                onPress={() => {
                  // record right or wrong of the answer to answers array
                  if (this.state.exam.results[this.state.count].correct_answer === 'False') {
                    this.state.answers.push('correct');
                  } else {
                    this.state.answers.push('incorrect');
                  }
                  if (this.state.count + 1 === this.state.exam.results.length) {
                    // amount of questions
                    const t = this.state.exam.results.length;
                    // right or wrong of answers
                    const { answers } = this.state;
                    navigate('Results', {
                      total: t,
                      answers,
                    });
                  } else {
                    this.setState({ count: this.state.count += 1 });
                  }
                }}
                title="FALSE"
                color="#148"
              />
            </View>
          </View>
        </View>
      );
    }
    // screen display during question json fetching
    return (
      <View style={styles.container}>
        <Text id="1" />
        <Text id="2">loading...</Text>
        <Text id="5" />
      </View>
    );
  }
}

export default QuizScreen;
