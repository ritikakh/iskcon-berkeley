import React from "react";
import Menu from "./menu";
import Carousel from "./Carousel";
import aboutUsImage from "../images/aboutUsImage.jpg";

export default () =>
  <div className="container-fluid">
    <div className="container-fluid">
      <Menu />
      <Carousel className={"myCarousel"}/>
    </div><br/>
    <div className="container-fluid">
      <h4 className="iskcon-h3">The Founder</h4>
      <p>When Param Pujya A.C. Bhaktivedanta Swami Shrila Prabhupada (Shrila Prabhupada) entered
        the port of New York City on September 17, 1965, Americans could hardy care. He was yet
        another visitor to this fabulous country, albeit undergoing deep social and political turmoil.
        However, Shrila Prabhupada was not here to just visit America as he had no interest in its
        concrete cities and houses with indoor plumbing. Instead, he had come here to spread the ancient
        Vedic teachings of India. Before he passed away on November 14, 1977 at the age of 81, he had
        achieved this mission: over 350 vibrant centers not only in America but across the globe were
        bristling with Vedic teachings!</p>
      <p>Shrila Prabhupada was born Abhay Charan De on September 1, 1896 in a pious Hindu business
        family of Calcutta, India which at that time was still chained to the British imperialists. He
        received his college education in one of its premier institution, the Scottish Church College.
        When he was a college student of 22 years of age, his family arranged his marriage with an 11
        year old girl, Radharani Devi, following the then prevalent tradition of marrying girls before
        their puberty. Three years later, the couple had their first son. Abhay later became a successful
        pharmaceutical businessman and would have continued with it had he not met with a remarkable
        religious personality of that time, Shrila Bhaktisiddhanta Saraswati. Shrila Bhaktisiddhanta was a
        leader in the Gaudiya Vaishnava sampradaya (religious sect) of Bengal. As though divinely
        arranged, this meeting left an indelible impression on Abhay&#39;s mind, and he later accepted
        Bhaktisiddhanta Saraswati as his guru (spiritual master). It was on his Guru&#39;s urging that Shrila
        Prabhupad later took the arduous sea journey to America to spread the teachings of Bhagwan
        Shri Krishna to the English-speaking world. Abhay was later honored with the title of
        Bhaktivedanta Swami Prabhupada. In 1959, at the age of 58, he took sannyasa, the renounced
        order of life, following the Vedic ashram (stages of life) system and started living a solitary life
        of a renunciant in Vrindavan, away from his family.</p>
      <p>In 1965, at the age of sixty-nine, Srila Prabhupada traveled to New York City aboard a cargo
        ship. The journey was treacherous, and the elderly spiritual teacher suffered two heart attacks
        aboard the ship. Arriving in the United States with just seven dollars worth of Indian rupees and
        his translations of sacred Sanskrit texts, Shrila Prabhupada began to share the timeless Vedic
        wisdom with one and all. Experiencing a multitude of hardships, he pushed on his mission that
        soon spread among the American masses. Americans were disillusioned with Vietnam War; they
        were experimenting with mind-altering drugs and the Hippie counter-culture was in vogue.</p>
      <p>Starting with a small storefront as a temple on New York’s Lower East Side, he soon went on to
        start an organization, the International Society for Krishna Consciousness (ISKCON) in the state
        of New York on July 11, 1966, less than a year after his arrival in this country.</p>
      <img className="about-iskcon-image img-fluid" src={aboutUsImage} />
      <p>In the eleven years that followed, Srila Prabhupada traveled extensively all over the world on
        lecture tours, bringing the teachings of Bhagvad Gita to thousands of people on six continents.
        Men and women from all backgrounds and walks of life came forward to accept his message,
        and with their help, Srila Prabhupada established ISKCON centers and projects throughout the
        world. With the desire to nourish the roots of Krishna Bhakti (devotion) in its very home, Srila
        Prabhupada returned to his home country India several times, where he sparked a revival in the
        Vaishnava tradition. There, he opened dozens of temples, including large centers in the holy
        towns of Vrindavan and Mayapur.</p>
      <p>Shrila Prabhupada’s most significant contributions are his books. &quot;If you ever get money, print
        books&quot; was his guru&#39;s instruction, which Shrila Prabhupada aptly carried out by authoring
        English translations of Bhagavad-Gita, Srimad-Bhagavatam, and Chaitanya Charitamrita and
        numerous other books. His writings have been translated into 76 languages. Perhaps the best
        tribute to this extraordinary personality of our times comes through the words of Shri Atal Bihari
        Vajpayee, the former Prime Minister of India: &quot;The voyage of Bhaktivedanta Swami Prabhupada
        to the United States in 1965 and the spectacular popularity his movement gained in a very short
        spell of twelve years must be regarded as one of the greatest spiritual events of the century.&quot;</p>
      <i>Jai Shrila Prabhupad!</i>
    </div>
  </div>

