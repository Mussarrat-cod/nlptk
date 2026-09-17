// ---------------------------------------------------------------------------
// Snippet data
// Requested Arduino IoT Lab snippets: 1A, 1B, 1C, 2A, 2B, 3A, 3B, 3C.
// ---------------------------------------------------------------------------

const SNIPPETS = [
  {
    id: "1a",
    title: "1A",
    file: "1a.ino",
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
}`
  },

  {
    id: "1b",
    title: "1B",
    file: "1b.ino",
    code: `#define LED_PIN 7
#define MICROSWITCH_PIN 5

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(MICROSWITCH_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(MICROSWITCH_PIN) == HIGH) {
    digitalWrite(LED_PIN, HIGH);
    Serial.println(1);
  }
  else {
    digitalWrite(LED_PIN, LOW);
    Serial.println(0);
  }
}`
  },

  {
    id: "1c",
    title: "1C",
    file: "1c.ino",
    code: `void setup()
{
  pinMode(7, OUTPUT);
  Serial.begin(9600);
  while (!Serial);
  Serial.println("Input 1 to Turn LED on and 2 to off");
}

void loop() {
  if (Serial.available())
  {
    int state = Serial.parseInt();

    if (state == 1)
    {
      digitalWrite(7, HIGH);
      Serial.println("Command completed LED turned ON");
    }

    if (state == 2)
    {
      digitalWrite(7, LOW);
      Serial.println("Command completed LED turned OFF");
    }
  }
}`
  },

  {
    id: "2a",
    title: "2A",
    file: "2a.ino",
    code: `int led = 9;
int brightness = 0;
int fadeAmount = 5;

void setup() {
  // put your setup code here, to run once:
  pinMode(led, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  analogWrite(led, brightness);

  brightness = brightness + fadeAmount;

  if (brightness == 0 || brightness == 125) {
    fadeAmount = -fadeAmount;
  }

  delay(200);
}`
  },

  {
    id: "2b",
    title: "2B",
    file: "2b.ino",
    code: `int potPin = A0;
int gPin = 9;
int potVal;
float LEDVal;

void setup() {
  pinMode(potPin, INPUT);
  pinMode(gPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  potVal = analogRead(potPin);
  LEDVal = (255./1023.) * potVal;

  analogWrite(gPin, LEDVal);

  delay(500);
  Serial.println(LEDVal);
}`
  },

  {
    id: "3a",
    title: "3A",
    file: "3a.ino",
    code: `void setup() {
  // put your setup code here, to run once:
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(5,HIGH);
  digitalWrite(6,LOW);
  digitalWrite(7,LOW);
  delay(4500);

  digitalWrite(5,LOW);
  digitalWrite(6,HIGH);
  digitalWrite(7,LOW);
  delay(2000);

  digitalWrite(5,LOW);
  digitalWrite(6,LOW);
  digitalWrite(7,HIGH);
  delay(2800);
}`
  },

  {
    id: "3b",
    title: "3B",
    file: "3b.ino",
    code: `void setup() {
  // put your setup code here, to run once:
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(4,HIGH);
  delay(100);

  digitalWrite(5,HIGH);
  delay(100);

  digitalWrite(6,HIGH);
  delay(100);

  digitalWrite(7,HIGH);
  delay(100);

  digitalWrite(7,LOW);
  delay(100);

  digitalWrite(6,LOW);
  delay(100);

  digitalWrite(5,LOW);
  delay(100);

  digitalWrite(4,LOW);
  delay(100);
}`
  },

  {
    id: "3c",
    title: "3C",
    file: "3c.ino",
    code: `void setup() {
  // put your setup code here, to run once:
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:

  digitalWrite(2,HIGH);
  delay(1000);

  // Number 2
  digitalWrite(2,LOW);
  digitalWrite(3,HIGH);
  delay(1000);

  // Number 3
  digitalWrite(3,HIGH);
  digitalWrite(2,HIGH);
  delay(1000);

  // Number 4
  digitalWrite(2,LOW);
  digitalWrite(3,LOW);
  digitalWrite(4,HIGH);
  delay(1000);

  // Number 5
  digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
  digitalWrite(4,HIGH);
  delay(1000);

  // Number 6
  digitalWrite(2,LOW);
  digitalWrite(3,HIGH);
  digitalWrite(4,HIGH);
  delay(1000);

  // Number 7
  digitalWrite(2,HIGH);
  digitalWrite(3,HIGH);
  digitalWrite(4,HIGH);
  delay(1000);

  // Number 8
  digitalWrite(2,LOW);
  digitalWrite(3,LOW);
  digitalWrite(4,LOW);
  digitalWrite(5,HIGH);
  delay(1000);

  // Number 9
  digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
  digitalWrite(4,LOW);
  digitalWrite(5,HIGH);
  delay(1000);

  // RESET
  digitalWrite(2,LOW);
  digitalWrite(3,LOW);
  digitalWrite(4,LOW);
  digitalWrite(5,LOW);
  delay(1000);

  // Number 9
  digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
  digitalWrite(4,LOW);
  digitalWrite(5,HIGH);
  delay(1000);

  // Number 8
  digitalWrite(2,LOW);
  digitalWrite(3,LOW);
  digitalWrite(4,LOW);
  digitalWrite(5,HIGH);
  delay(1000);

  // Number 7
  digitalWrite(2,HIGH);
  digitalWrite(3,HIGH);
  digitalWrite(4,HIGH);
  digitalWrite(5,LOW);
  delay(1000);

  // Number 6
  digitalWrite(2,LOW);
  digitalWrite(3,HIGH);
  digitalWrite(4,HIGH);
  delay(1000);

  // Number 5
  digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
  digitalWrite(4,HIGH);
  delay(1000);

  // Number 4
  digitalWrite(2,LOW);
  digitalWrite(3,LOW);
  digitalWrite(4,HIGH);
  delay(1000);

  // Number 3
  digitalWrite(3,HIGH);
  digitalWrite(2,HIGH);
  digitalWrite(4,LOW);
  delay(1000);

  // Number 2
  digitalWrite(2,LOW);
  digitalWrite(3,HIGH);
  delay(1000);

  // Number 1
  digitalWrite(2,HIGH);
  digitalWrite(3,LOW);
  delay(1000);

  // RESET
  digitalWrite(2,LOW);
  digitalWrite(3,LOW);
  digitalWrite(4,LOW);
  digitalWrite(5,LOW);
  delay(1000);
}`
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
