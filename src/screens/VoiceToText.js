import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Voice from 'react-native-voice';

class App extends Component {
  state = {
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
  };

  constructor(props) {
    super(props);
    //Setting callbacks for the process status
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    //destroy the process after switching the screen
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = e => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    this.setState({
      started: 'âˆš',
    });
  };

  onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: 'âˆš',
    });
  };

  onSpeechError = e => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value,
    });
  };

  onSpeechPartialResults = e => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    this.setState({
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Example of Speech to Text conversion / Voice Recognition
          </Text>
          <Text style={styles.instructions}>
            Press mike to start Recognition
          </Text>
          <View style={styles.page}>
            <Text style={styles.textStyle}>{`Started: ${
              this.state.started
            }`}</Text>
            <Text style={styles.textStyle}>{`End: ${this.state.end}`}</Text>
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.textStyle}>{`Pitch \n ${
              this.state.pitch
            }`}</Text>
            <Text style={styles.textStyle}>{`Error \n ${
              this.state.error
            }`}</Text>
          </View>
          <TouchableHighlight
            onPress={this._startRecognizing}
            style={{marginVertical: 20}}>
            <Image
              style={styles.button}
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
              }}
            />
          </TouchableHighlight>
          <Text style={styles.textStyle}>Partial Results</Text>
          <ScrollView>
            {this.state.partialResults.map((result, index) => {
              return (
                <Text key={`partial-result-${index}`} style={styles.textStyle}>
                  {result}
                </Text>
              );
            })}
          </ScrollView>
          <Text style={styles.stat}>Results</Text>
          <ScrollView style={{marginBottom: 42}}>
            {this.state.results.map((result, index) => {
              return (
                <Text key={`result-${index}`} style={styles.stat}>
                  {result}
                </Text>
              );
            })}
          </ScrollView>
          <View style={styles.bottomViewStyle}>
            <TouchableHighlight
              onPress={this._stopRecognizing}
              style={styles.touchableStyle}>
              <Text style={styles.action}>Stop</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this._cancelRecognizing}
              style={styles.touchableStyle}>
              <Text style={styles.action}>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this._destroyRecognizer}
              style={styles.touchableStyle}>
              <Text style={styles.action}>Destroy</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  touchableStyle: {flex: 1, backgroundColor: 'red'},
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    paddingVertical: 8,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    marginTop: 30,
  },
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    color: '#B0171F',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textBottomStyle: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    fontWeight: '700',
  },
  bottomViewStyle: {
    flexDirection: 'row',
    alignContent: 'space-between',
    position: 'absolute',
    bottom: 0,
  },
  safeAreaView: {
    flex: 1,
  },
});
export default App;
