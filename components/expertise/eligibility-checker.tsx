'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/animated-section'
import { ChevronRight } from 'lucide-react'

const STEPS = [
  {
    id: 'relationship',
    question: 'What is your relationship to the UK sponsor?',
    options: ['Spouse / Civil Partner', 'Unmarried Partner (2+ years)', 'Fiancé(e)', 'Other'],
  },
  {
    id: 'income',
    question: 'Does your UK sponsor meet the financial requirement?',
    options: ['Yes — above £29,000/year', 'Not sure', 'No / Below threshold'],
  },
  {
    id: 'english',
    question: 'Can you demonstrate English language ability?',
    options: [
      'Yes — A2 certificate held',
      'Yes — from majority English-speaking country',
      'Not yet',
    ],
  },
]

export function EligibilityChecker() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)

  const step = STEPS[currentStep]
  const isComplete = Object.keys(answers).length === STEPS.length

  const handleSelect = (option: string) => {
    const newAnswers = { ...answers, [step.id]: option }
    setAnswers(newAnswers)

    if (currentStep < STEPS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  return (
    <AnimatedSection className="bg-bg-surface rounded-lg p-8 md:p-12 shadow-card">
      {!showResult ? (
        <>
          {/* Progress */}
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              {STEPS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    idx <= currentStep ? 'bg-accent' : 'bg-border-hairline'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-text-muted">
              Question {currentStep + 1} of {STEPS.length}
            </p>
          </div>

          {/* Question */}
          <h3 className="font-serif text-2xl font-bold text-text-primary mb-8">
            {step.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {step.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full p-4 text-left rounded-lg border-2 border-border-hairline hover:border-accent hover:bg-accent/5 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-text-primary group-hover:text-accent transition-colors">
                    {option}
                  </span>
                  <ChevronRight size={20} className="text-text-muted group-hover:text-accent transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Result */}
          <div className="text-center">
            <div className="mb-6 inline-block p-4 rounded-full bg-accent/10">
              <div className="text-4xl">✓</div>
            </div>
            <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">
              Spouse Visa Route
            </h3>
            <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
              Based on your answers, a spouse visa appears to be the appropriate route. You'll need to meet the financial requirement and English language standard.
            </p>

            <div className="bg-gold/10 rounded-lg p-6 mb-8 text-left">
              <p className="text-sm text-text-muted mb-4">
                <strong>Next steps:</strong>
              </p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Confirm you meet the £29,000+ financial threshold</li>
                <li>• Gather required documentation</li>
                <li>• Book a consultation to discuss your specific case</li>
              </ul>
            </div>

            <p className="text-sm text-text-muted mb-8">
              This is a non-binding initial assessment. Every case is unique. Speak with a qualified solicitor to confirm this is the right route for your situation.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-lg border-2 border-accent text-accent font-medium hover:bg-accent/10 transition-colors"
              >
                Start Over
              </button>
              <button className="px-6 py-3 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </>
      )}
    </AnimatedSection>
  )
}
