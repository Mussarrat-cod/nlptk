// ---------------------------------------------------------------------------
// Snippet data: NLP Lab Programs (5A, 5B, 6, 7, 8)
// ---------------------------------------------------------------------------

const SNIPPETS = [
  {
    id: "5a",
    title: "Program 5A - Unigrams, Bigrams, Trigrams",
    file: "5a.py",
    code: `import nltk
from nltk.util import ngrams

nltk.download('punkt')
nltk.download('punkt_tab')

# Given corpus
corpus = """
this is a very good book to study
"""

# Tokenization
tokens = nltk.word_tokenize(corpus.lower())

# Keep only words
tokens = [word for word in tokens if word.isalpha()]

# Generate n-grams
unigrams = list(ngrams(tokens, 1))
bigrams = list(ngrams(tokens, 2))
trigrams = list(ngrams(tokens, 3))

# Display results
print("Unigrams:")
print(unigrams)

print("\\nBigrams:")
print(bigrams)

print("\\nTrigrams:")
print(trigrams)`
  },

  {
    id: "5b",
    title: "Program 5B - Bigram Language Model Probability",
    file: "5b.py",
    code: `from collections import Counter

# Corpus
corpus = [
    "This is a dog",
    "This is a cat",
    "I love my cat",
    "This is my name"
]

# Convert corpus into tokens
tokens = []
for sentence in corpus:
    tokens.extend(sentence.lower().split())

# Count unigrams
unigram_counts = Counter(tokens)

# Create and count bigrams
bigrams = list(zip(tokens, tokens[1:]))
bigram_counts = Counter(bigrams)

# Given statement
statement = "This is my cat"
words = statement.lower().split()

# Calculate probability using Bigram Language Model
probability = 1.0
for i in range(1, len(words)):
    previous_word = words[i - 1]
    current_word = words[i]
    bigram_count = bigram_counts[(previous_word, current_word)]
    previous_word_count = unigram_counts[previous_word]
    p = bigram_count / previous_word_count
    print(f"P({current_word}|{previous_word}) = "
          f"{bigram_count}/{previous_word_count} = {p}")
    probability *= p

print("\\nProbability of 'This is my cat' =", probability)`
  },

  {
    id: "6",
    title: "Program 6 - Stanford Named Entity Recognition (Stanza)",
    file: "6.py",
    code: `import stanza

# Download and initialize Stanza pipeline
stanza.download('en')
nlp = stanza.Pipeline(lang='en', processors='tokenize,ner')

def extract_named_entities(text):
    """Extract named entities and their types using Stanford NLP."""
    doc = nlp(text)
    entities = [(ent.text, ent.type) for ent in doc.entities]
    return entities

# Example documents
documents = [
    "Barack Obama was the 44th President of the United States.",
    "Microsoft was founded by Bill Gates in 1975.",
    "The Taj Mahal is located in India."
]

# Process each document
for i, doc in enumerate(documents):
    entities = extract_named_entities(doc)
    print(f"\\nDocument {i+1}:")
    print(f"Named Entities: {entities}")`
  },

  {
    id: "7",
    title: "Program 7 - Stopwords Frequency & TF-IDF",
    file: "7.py",
    code: `import nltk
import collections
from nltk.corpus import stopwords, reuters
from sklearn.feature_extraction.text import TfidfVectorizer

# Download necessary NLTK datasets
nltk.download('stopwords')
nltk.download('reuters')
nltk.download('punkt')
nltk.download('punkt_tab')

# Load English stopwords
stop_words = set(stopwords.words('english'))

# Load Reuters corpus documents
documents = [reuters.raw(file_id) for file_id in reuters.fileids()]

# Function to count stopword occurrences
def stopword_frequency(documents):
    stopword_counts = collections.Counter()

    for doc in documents:
        # Tokenize and convert to lowercase
        words = nltk.word_tokenize(doc.lower())

        # Count only stopwords
        stopword_counts.update(
            word for word in words if word in stop_words
        )

    return stopword_counts

# Compute stopword frequencies
stopword_counts = stopword_frequency(documents)

# Print top 10 most common stopwords
print("\\nMost Frequently Occurring Stopwords:")
print(stopword_counts.most_common(10))

# Function to compute TF-IDF scores
def compute_tf_idf(documents):
    # Stopwords are automatically removed
    vectorizer = TfidfVectorizer(stop_words='english')

    # Create TF-IDF matrix
    tfidf_matrix = vectorizer.fit_transform(documents)

    # Get all vocabulary words
    feature_names = vectorizer.get_feature_names_out()

    # Take the first Reuters document as an example
    doc_idx = 0

    tfidf_scores = dict(
        zip(
            feature_names,
            tfidf_matrix[doc_idx].toarray().flatten()
        )
    )

    # Sort words according to TF-IDF score
    return sorted(
        tfidf_scores.items(),
        key=lambda x: x[1],
        reverse=True
    )

# Compute TF-IDF
tfidf_results = compute_tf_idf(documents)

# Print top 10 words with highest TF-IDF scores
print("\\nTop 10 Important Words Based on TF-IDF:")
print(tfidf_results[:10])`
  },

  {
    id: "8",
    title: "Program 8 - Sentiment Analysis using NLP",
    file: "8.py",
    code: `import nltk
from nltk.corpus import movie_reviews
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

# Download NLTK dataset
nltk.download('movie_reviews')

# Load dataset (NLTK Movie Reviews)
def load_data():
    docs = []
    labels = []

    for category in movie_reviews.categories():
        for fileid in movie_reviews.fileids(category):
            docs.append(movie_reviews.raw(fileid))
            labels.append(category)

    return docs, labels

# Load dataset
X_train, y_train = load_data()

# Create pipeline: TF-IDF + Naive Bayes
model = make_pipeline(
    TfidfVectorizer(stop_words='english'),
    MultinomialNB()
)

# Train the model
model.fit(X_train, y_train)

# Function to predict sentiment
def analyze_sentiment(text):
    prediction = model.predict([text])[0]
    return f"Predicted Sentiment: {prediction.upper()}"

# Example sentences
texts = [
    "I absolutely loved this movie!",
    "This was the worst film I've ever seen.",
    "The storyline was decent, but the acting could have been better."
]

# Perform sentiment analysis
for i, text in enumerate(texts):
    result = analyze_sentiment(text)
    print(f"\\nText {i+1}: {text}")
    print(result)`
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
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span class="card-filename">
          ${escapeHtml(snippet.file)}
        </span>

        <button
          type="button"
          class="copy-btn"
          data-target="${codeId}"
        >
          Copy
        </button>
      </div>

      <h2 class="card-label">
        ${escapeHtml(snippet.title)}
      </h2>

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
    if (
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
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
