import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import biocell from '../media/Biologytopic.png'
import bioevol from '../media/bioevolution.png'
import './classhome.css'

function Classhome() {
  const open = () => {
    document.getElementById('right-spacer-notes-container').style.display =
      'block'
    document.getElementById('right-spacer-container-button-one').style.display =
      'none'
    document.getElementById('right-spacer-container-button-two').style.display =
      'block'
  }
  const close = () => {
    document.getElementById('right-spacer-notes-container').style.display =
      'none'
    document.getElementById('right-spacer-container-button-one').style.display =
      'block'
    document.getElementById('right-spacer-container-button-two').style.display =
      'none'
  }
  return (
    <>
      <Container fluid id="Home-container">
        <div class="left-spacer"></div>

        <div class="right-spacer-container">
          <div id="right-spacer-container-buttons">
            <button
              onClick={open}
              class="right-spacer-container-button-one"
              id="right-spacer-container-button-one"
            ></button>

            <button
              onClick={close}
              class="right-spacer-container-button-two"
              id="right-spacer-container-button-two"
            ></button>
          </div>
          <div class="right-spacer">
            <div class="right-spacer-content">
              <div class="right-spacer-content-topic">
                <h1>1.1 Biology is the science of life.</h1>
                <h2>Properties of Life</h2>
                <p class="right-spacer-paragraph">
                  In its broadest sense, biology is the study of living
                  things—the science of life. Living things come in an
                  astounding variety of shapes and forms, and biologists study
                  life in many different ways. They live with gorillas, collect
                  fossils, and listen to whales. They isolate viruses, grow
                  mushrooms, and examine the structure of fruit flies. They read
                  the messages encoded in the long molecules of heredity and
                  count how many times a hummingbird’s wings beat each second.
                  What makes something “alive”? Anyone could deduce that a
                  galloping horse is alive and a car is not, but why? We cannot
                  say, “If it moves, it’s alive,” because a car can move, and
                  gelatin can wiggle in a bowl. They certainly are not alive.
                  What characteristics do define life? All living organisms
                  share five basic characteristics: 1. Order. All organisms
                  consist of one or more cells with highly ordered structures:
                  atoms make up molecules, which construct cellular organelles,
                  which are contained within cells. This hierarchical
                  organization continues at higher levels in multicellular
                  organisms and among organisms (figure 1.2). 2. Sensitivity.
                  All organisms respond to stimuli. Plants grow toward a source
                  of light, and your pupils dilate when you walk into a dark
                  room. 3. Growth, development, and reproduction. All organisms
                  are capable of growing and reproducing, and they all possess
                  hereditary molecules that are passed to their offspring,
                  ensuring that the offspring are of the same species. Although
                  crystals also “grow,” their growth does not involve hereditary
                  molecules. 4. Regulation. All organisms have regulatory
                  mechanisms that coordinate the organism’s internal functions.
                  These functions include supplying cells with nutrients,
                  transporting substances through the organism, and many others.
                  5. Homeostasis. All organisms maintain relatively constant
                  internal conditions, different from their environment, a
                  process called homeostasis
                </p>
                <img src={biocell} />
              </div>
              <div class="right-spacer-content-topics">
                <h1>
                  1.2 Darwin’s theory of evolution illustrates how science
                  works.
                </h1>
                <h2>Darwin’s Theory of Evolution</h2>
                <p class="right-spacer-paragraph">
                  Darwin’s theory of evolution explains and describes how
                  organisms on earth have changed over time and acquired a
                  diversity of new forms. This famous theory provides a good
                  example of how a scientist develops a hypothesis and how a
                  scientific theory grows and wins acceptance. Charles Robert
                  Darwin (1809–1882; figure 1.5) was an English naturalist who,
                  after 30 years of study and observation, wrote one of the most
                  famous and influential books of all time. This book, On the
                  Origin of Species by Means of Natural Selection, or The
                  Preservation of Favoured Races in the Struggle for Life,
                  created a sensation when it was published, and the ideas
                  Darwin expressed in it have played a central role in the
                  development of human thought ever since. In Darwin’s time,
                  most people believed that the various kinds of organisms and
                  their individual structures resulted from direct actions of
                  the Creator (and to this day many people still believe this to
                  be true). Species were thought to be specially created and
                  unchangeable, or immutable, over the course of time. In
                  contrast to these views, a number of earlier philosophers had
                  presented the view that living things must have changed during
                  the history of life on earth. Darwin proposed a concept he
                  called natural selection as a coherent, logical explanation
                  for this process, and he brought his ideas to wide public
                  attention. His book, as its title indicates, presented a
                  conclusion that differed sharply from conventional wisdom.
                  Although his theory did not challenge the existence of a
                  Divine Creator, Darwin argued that this Creator did not simply
                  create things and then leave them forever unchanged. Instead,
                  Darwin’s God expressed Himself through the operation of
                  natural laws that produced change over time, or evolution.
                </p>
                  <img src={bioevol} />
              </div>
            </div>
            <div id="right-spacer-notes-container">
              <div id="right-spacer-notes">
                <textarea id="right-spacer-notepad" placeholder="Take notes" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Classhome
