import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Score from './Score';
import Questions from './Questions';
import Category from './Category';
import Difficulty from './Difficulty';
import Questioncount from './Questioncount';

export default function Quizgame() {
    const { state } = useLocation();
        const category= state?.category || 12;
        const difficulty= state?.difficulty || "easy";
        const [questions, setQuestions] = useState([]);
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);

   const [result, setResult] = useState(false);
        console.log(difficulty);
        const apiurl= `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
      useEffect(()=>{
          fetch(apiurl).then((response)=>response.json()).then((data)=>setQuestions(data.results));

      },[]);

       let options=document.querySelectorAll('.quizgame__options .option');
      options.forEach(option=>{
          const number=[...Array(options.length).keys()];
          const random= Math.floor(Math.random()*options.length);
          option.style.order=number[random];
      })
 
      const handleAnswer = (correct) => {
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion<questions.length)
            {
          setCurrentQuestion(nextQuestion);
            }
            else{           
                  setCurrentQuestion(questions.length)
              setResult(true);
            }
            if (correct) {

              setScore(score + 1);

            } else {
                setCurrentQuestion(currentQuestion+1);
            }
          };  
  return (
    <div>

        <div className='quizgame__container'>

          {result && <Score score={score} questionlength={questions.length} difficulty={difficulty} category={category}/>  }
 
          <div className='quizgame__header'>

            <div className='quizgame__score'>Score: {score}</div>
            <div className='quizgame__question-count'>
            
         </div>
            <Questioncount current={currentQuestion+1} total={questions.length}/>
          </div>

              <Questions questions={questions[currentQuestion]?.question}/>
     
                <div className='quizgame__options'  >

            {questions[currentQuestion]?.incorrect_answers.map((answerOption,index)=> (     

                   <div className='option' key={index} onClick={() => handleAnswer(false)}>{answerOption}</div>
             ))}
             <div className='option' onClick={()=>handleAnswer(true)}>{questions[currentQuestion]?.correct_answer}</div>
           
                </div>
        </div>

                <div className='quizgame__footer'>
                  <Category category={questions[0]?.category}/>
                  <Difficulty difficulty={questions[0]?.difficulty}/>
                </div>
       
    </div>
  )
}

