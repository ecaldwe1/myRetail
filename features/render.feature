Feature: Render examples 

Scenario: Complex JSON props, variables and multiple renders
  Given that $purchasingChannelCode is
  """
  [ { "first": "Homer", "middle": "J", "last": "Simpson" }
  , { "first": "Marge", "middle": "" , "last": "Bouvier" }
  ]
  """
  When rendering <PurchaseChannel purchasingChannelCode={$purchasingChannelCode} />
  Then the 1st li has text equal to "Simpson, Homer J"