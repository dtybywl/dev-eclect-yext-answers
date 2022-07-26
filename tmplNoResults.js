var tmplNoResults = `
<div
  class="yxt-AlternativeVerticals{{#unless isShowingResults}} yxt-AlternativeVerticals--notShowingResults{{/unless}}">
  <div class="yxt-AlternativeVerticals-noResultsInfo">
    <em class="yxt-AlternativeVerticals-noResultsInfo--emphasized">
      No results found
    </em>
    in {{currentVerticalLabel}}.
    {{#if isShowingResults}}Showing<em class="yxt-AlternativeVerticals-noResultsInfo--emphasized"> all
      {{currentVerticalLabel}}</em> instead.{{/if}}
  </div>
  {{#if verticalSuggestions}}
  <div class="yxt-AlternativeVerticals-suggestionsWrapper">
    <div class="yxt-AlternativeVerticals-details">
      The following search
      {{plural verticalSuggestions.length 'category' 'categories'}}
      yielded results
      {{#if query}}
      for
      <span class="yxt-AlternativeVerticals-details--query">
        "{{query}}"</span>:
      {{/if}}
    </div>
    <ul class="yxt-AlternativeVerticals-suggestionsList">
      {{#each verticalSuggestions}}
      <li class="yxt-AlternativeVerticals-suggestion">
        <a class="yxt-AlternativeVerticals-suggestionLink" href="{{url}}">
          {{#if iconName}}
          <div class="yxt-AlternativeVerticals-verticalIconWrapper" data-component="IconComponent" data-opts='{
                            "iconName": "{{iconName}}"
                          }'>
          </div>
          {{/if}}
          <div class="yxt-AlternativeVerticals-suggestionLink--copy">
            <span class="yxt-AlternativeVerticals-suggestionLink--copyLabel">
              {{label}}
            </span>
            <span class="yxt-AlternativeVerticals-suggestionLink--copyResults">
              ({{resultsCount}} {{plural resultsCount 'result' 'results'}})
            </span>
          </div>
          <div class="yxt-AlternativeVerticals-arrowIconWrapper" data-component="IconComponent" data-opts='{
                          "iconName": "chevron"
                        }'>
          </div>
        </a>
      </li>
      {{/each}}
    </ul>
    {{#if universalUrl}}
    <div class="yxt-AlternativeVerticals-universalDetails">
      Alternatively, you can
      <a class="yxt-AlternativeVerticals-universalLink" href={{universalUrl}}>
        view results across all search categories</a>.
    </div>
    {{/if}}
  </div>
  {{/if}}
</div>
`;