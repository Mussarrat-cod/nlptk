// ---------------------------------------------------------------------------
// Snippet data
// Each entry: id (used for filename + DOM ids), title (card label), and the
// exact code text (preserved verbatim — do not reformat).
// ---------------------------------------------------------------------------

const SNIPPETS = [
  {
    id: "1a",
    title: "1A — Sentence & Word Tokenization",
    file: "1a_tokenization.py",
    code: `void setup() {
  // put your setup code here, to run once:
  pinMode(6, OUTPUT); 
  pinMode(7, OUTPUT); 
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(6,HIGH);
  digitalWrite(7,LOW);
  delay(500);

  digitalWrite(7,HIGH);
  digitalWrite(6,LOW);
  delay(500);
}
  },
  {
    id: "1b",
    title: "1B — Stopword Elimination",
    file: "1b_stopwords.py",
    code: `import nltk
nltk.download('stopwords')
nltk.download('punkt_tab')
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
def eliminate_stopwords(text):
    stop_words = set(stopwords.words('english'))
    words = word_tokenize(text)
    filtered_words = []
    for word in words:
        if word.lower() not in stop_words:
            filtered_words.append(word)
    return filtered_words
text = """NLTK is a leading platform for building Python programs to work with
human language data.
It provides easy
to
WordNet."""

filtered_words = eliminate_stopwords(text)
print("Text after eliminating stopwords:")
print(filtered_words)`
  },
  {
    id: "1c",
    title: "1C — Stemming",
    file: "1c_stemming.py",
    code: `import nltk 
nltk.download('punkt_tab')  # Download the necessary tokenization models 

from nltk.tokenize import word_tokenize 
from nltk.stem import PorterStemmer 

def perform_stemming(text): 
    stemmer = PorterStemmer() 
    words = word_tokenize(text) 

    stemmed_words = [] 
    for word in words: 
        stemmed_words.append(stemmer.stem(word)) 

    return stemmed_words 

# Example text 
text = """The students are studying different subjects. 
They studied programming and developed several applications. 
The students are learning new technologies.""" 
# Perform stemming 
stemmed_words = perform_stemming(text) 
# Print stemmed words 
print("Stemmed words:") 
print(stemmed_words) `
  },
  {
    id: "2a",
    title: "2A — POS Tagging",
    file: "2a_pos_tagging.py",
    code: `import nltk
nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('averaged_perceptron_tagger_eng')

from nltk.tokenize import word_tokenize
from nltk import pos_tag

def pos_tagging(text):
    words = word_tokenize(text)
    tagged_words = pos_tag(words)
    for word, tag in tagged_words:
        print(word, ">", tag)

text = "The cats are chasing mice and playing in the garden"

pos_tagging(text)`
  },
  {
    id: "2b",
    title: "2B — Lemmatization",
    file: "2b_lemmatization.py",
    code: `# Lemmatization 
import nltk 
from nltk.tokenize import word_tokenize 
from nltk.stem import WordNetLemmatizer 
nltk.download('punkt') 
nltk.download('wordnet') 
def lemmatize_text(text): 
    lemmatizer = WordNetLemmatizer() 
    tokens = word_tokenize(text) 
    lemmatized_text = ' '.join( 
        [lemmatizer.lemmatize(word) for word in tokens] 
    ) 
    return lemmatized_text 
# Input text 
text = "The cats are chasing mice and playing in the garden" 
# Call the function 
lemmatized_text = lemmatize_text(text) 
print("Original Text:", text) 
print("Lemmatized Text:", lemmatized_text)`
  },
  {
    id: "3a",
    title: "3A — Chunking with RegexpParser",
    file: "3a_chunking.py",
    code: `import nltk 
from nltk import word_tokenize, pos_tag 
from nltk.chunk import RegexpParser 
# Download required resources 
nltk.download('punkt') 
nltk.download('punkt_tab') 
nltk.download('averaged_perceptron_tagger_eng') 
# Input sentence 
sentence = "The quick brown fox jumps over the lazy dog" 
# Tokenization 
words = word_tokenize(sentence) 
# POS Tagging 
tagged_words = pos_tag(words) 
print("POS Tagged Words:") 
print(tagged_words) 
# Define Chunk Grammar 
grammar = r""" 
    NP: {<DT|JJ|NN.*>+}              # Noun Phrase 
    PP: {<IN><NP>}                    # Preposition + Noun Phrase 
    VP: {<VB.*><NP|PP|CLAUSE>+$}      # Verb + NP/PP/Clause 
    CLAUSE: {<NP><VP>}                # Noun Phrase + Verb Phrase 
""" 
# Create the chunk parser 
chunk_parser = RegexpParser(grammar) 
# Perform chunking 
chunked_tree = chunk_parser.parse(tagged_words) 
# Display the result 
print("\\nChunked Tree:") 
print(chunked_tree)`
  },
  {
    id: "3b",
    title: "3B — Named Entity Recognition",
    file: "3b_ner.py",
    code: `import nltk
from nltk import word_tokenize, pos_tag, ne_chunk

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger_eng')
nltk.download('maxent_ne_chunker_tab')
nltk.download('words')

sentence = "Apple is a company based in California, United States. Steve Jobs was one of its founders."

words = word_tokenize(sentence)

tagged_words = pos_tag(words)

named_entities = ne_chunk(tagged_words)

print("Named Entities:")
print(named_entities)`
  },
  {
    id: "4a",
    title: "4A — TF-IDF Vectorization",
    file: "4a_tfidf.py",
    code: `import nltk
import string
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer

nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')

documents = [
    "This is the first document.",
    "This document is the second document.",
    "And this is the third one.",
    "Is this the first document?"
]

def preprocess_text(doc):
    tokens = nltk.word_tokenize(doc)

    tokens = [word for word in tokens
              if word not in string.punctuation]

    tokens = [word.lower() for word in tokens]

    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens
              if word not in stop_words]

    preprocessed_doc = ' '.join(tokens)

    return preprocessed_doc

preprocessed_documents = [
    preprocess_text(doc) for doc in documents
]

print("Preprocessed Documents:")
print(preprocessed_documents)

vectorizer = TfidfVectorizer()

tfidf_matrix = vectorizer.fit_transform(
    preprocessed_documents
)

print("\\nFeature Names:")
print(vectorizer.get_feature_names_out())

print("\\nTF-IDF Matrix:")
print(tfidf_matrix.toarray())`
  }
];

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderSnippets() {
  const grid = document.getElementById("snippet-grid");
  const fragment = document.createDocumentFragment();

  SNIPPETS.forEach((snippet) => {
    const card = document.createElement("section");
    card.className = "snippet-card";
    card.id = `snippet-${snippet.id}`;

    const codeId = `code-${snippet.id}`;

    card.innerHTML = `
      <div class="card-chrome">
        <div class="dots"><span></span><span></span><span></span></div>
        <span class="card-filename">${escapeHtml(snippet.file)}</span>
        <button type="button" class="copy-btn" data-target="${codeId}">Copy</button>
      </div>
      <h2 class="card-label">${escapeHtml(snippet.title)}</h2>
      <div class="card-body">
        <pre><code id="${codeId}">${escapeHtml(snippet.code)}</code></pre>
      </div>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// ---------------------------------------------------------------------------
// Copy to clipboard
// ---------------------------------------------------------------------------

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  textarea.style.left = "-1000px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  let succeeded = false;
  try {
    succeeded = document.execCommand("copy");
  } catch (err) {
    succeeded = false;
  }

  document.body.removeChild(textarea);
  return succeeded;
}

function showButtonState(button, state) {
  const original = "Copy";
  button.classList.remove("copied", "copy-failed");

  if (state === "success") {
    button.textContent = "Copied!";
    button.classList.add("copied");
  } else {
    button.textContent = "Failed";
    button.classList.add("copy-failed");
  }

  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove("copied", "copy-failed");
  }, 1800);
}

async function handleCopyClick(event) {
  const button = event.currentTarget;
  const targetId = button.getAttribute("data-target");
  const codeEl = document.getElementById(targetId);
  if (!codeEl) return;

  const text = codeEl.textContent;

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      showButtonState(button, "success");
    } else {
      const ok = fallbackCopy(text);
      showButtonState(button, ok ? "success" : "error");
    }
  } catch (err) {
    const ok = fallbackCopy(text);
    showButtonState(button, ok ? "success" : "error");
  }
}

function attachCopyHandlers() {
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", handleCopyClick);
  });
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  renderSnippets();
  attachCopyHandlers();
});
